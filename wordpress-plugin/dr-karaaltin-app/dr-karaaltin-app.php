<?php
/**
 * Plugin Name: Dr Karaaltin App
 * Description: Serves the Karaaltin React app with clean URLs at the site root.
 * Version: 0.1.0
 */

defined('ABSPATH') || exit;

const KARAALTIN_APP_QUERY_VAR = 'karaaltin_app';
const KARAALTIN_APP_SCRIPT_HANDLE = 'karaaltin-app';

function karaaltin_app_add_rewrite_rule(): void {
    // Serve the app for everything except core WP endpoints/static directories.
    // This keeps clean SPA URLs like /about working on refresh.
    add_rewrite_rule(
        '^(?!wp-admin|wp-json|wp-content|wp-includes|wp-login\.php|wp-cron\.php|wp-signup\.php|wp-activate\.php|wp-comments-post\.php|xmlrpc\.php|robots\.txt|favicon\.ico|sitemap\.xml|sitemap_index\.xml|\.well-known/).*',
        'index.php?' . KARAALTIN_APP_QUERY_VAR . '=1',
        'top'
    );
}

add_action('init', 'karaaltin_app_add_rewrite_rule');

function karaaltin_app_register_query_var(array $vars): array {
    $vars[] = KARAALTIN_APP_QUERY_VAR;
    return $vars;
}

add_filter('query_vars', 'karaaltin_app_register_query_var');

function karaaltin_app_is_request(): bool {
    return get_query_var(KARAALTIN_APP_QUERY_VAR) === '1';
}

function karaaltin_app_should_bypass(): bool {
    if (is_admin()) {
        return true;
    }

    $path = (string) parse_url((string) ($_SERVER['REQUEST_URI'] ?? '/'), PHP_URL_PATH);
    if ($path === '') {
        $path = '/';
    }

    $blockedPrefixes = [
        '/wp-admin',
        '/wp-json',
        '/wp-content',
        '/wp-includes',
    ];

    foreach ($blockedPrefixes as $prefix) {
        if (strpos($path, $prefix) === 0) {
            return true;
        }
    }

    $blockedExact = [
        '/wp-login.php',
        '/wp-cron.php',
        '/wp-signup.php',
        '/wp-activate.php',
        '/wp-comments-post.php',
        '/xmlrpc.php',
        '/robots.txt',
        '/favicon.ico',
        '/sitemap.xml',
        '/sitemap_index.xml',
    ];

    if (in_array($path, $blockedExact, true)) {
        return true;
    }

    if (strpos($path, '/.well-known/') === 0) {
        return true;
    }

    return false;
}

function karaaltin_app_manifest(): ?array {
    $manifestPath = plugin_dir_path(__FILE__) . 'dist/.vite/manifest.json';
    if (!file_exists($manifestPath)) {
        return null;
    }

    $manifest = json_decode((string) file_get_contents($manifestPath), true);
    if (!is_array($manifest)) {
        return null;
    }

    return $manifest;
}

function karaaltin_app_entry_from_manifest(array $manifest): ?array {
    $preferredKeys = ['src/main.tsx', 'index.html'];

    foreach ($preferredKeys as $key) {
        if (isset($manifest[$key]) && !empty($manifest[$key]['isEntry'])) {
            return $manifest[$key];
        }
    }

    foreach ($manifest as $item) {
        if (is_array($item) && !empty($item['isEntry'])) {
            return $item;
        }
    }

    return null;
}

function karaaltin_app_enqueue_assets(): void {
    if (!karaaltin_app_is_request() || karaaltin_app_should_bypass()) {
        return;
    }

    $manifest = karaaltin_app_manifest();
    if ($manifest === null) {
        return;
    }

    $entry = karaaltin_app_entry_from_manifest($manifest);
    if ($entry === null || empty($entry['file'])) {
        return;
    }

    $baseUrl = plugin_dir_url(__FILE__) . 'dist/';

    if (!empty($entry['css']) && is_array($entry['css'])) {
        foreach ($entry['css'] as $idx => $cssFile) {
            wp_enqueue_style(KARAALTIN_APP_SCRIPT_HANDLE . '-css-' . $idx, $baseUrl . $cssFile, [], null);
        }
    }

    wp_enqueue_script(KARAALTIN_APP_SCRIPT_HANDLE, $baseUrl . $entry['file'], [], null, true);
    wp_add_inline_script(
        KARAALTIN_APP_SCRIPT_HANDLE,
        'window.__KARAALTIN_APP_DIST__=' . wp_json_encode($baseUrl) . ';',
        'before'
    );
}

add_action('wp_enqueue_scripts', 'karaaltin_app_enqueue_assets');

function karaaltin_app_force_module_script(string $tag, string $handle, string $src): string {
    if ($handle !== KARAALTIN_APP_SCRIPT_HANDLE) {
        return $tag;
    }

    return '<script type="module" src="' . esc_url($src) . '"></script>';
}

add_filter('script_loader_tag', 'karaaltin_app_force_module_script', 10, 3);

function karaaltin_app_maybe_serve_dist_file(): bool {
    $uri = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    $path = (string) parse_url($uri, PHP_URL_PATH);

    if ($path === '' || $path === '/') {
        return false;
    }

    // Prevent dotfiles and traversal.
    if (strpos($path, '..') !== false || strpos($path, '/.') === 0) {
        return false;
    }

    $filePath = plugin_dir_path(__FILE__) . 'dist' . $path;
    if (!is_file($filePath)) {
        return false;
    }

    $ft = wp_check_filetype($filePath);
    $mime = $ft['type'] ?: 'application/octet-stream';

    header('Content-Type: ' . $mime);
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: public, max-age=86400');
    header('Content-Length: ' . (string) filesize($filePath));

    readfile($filePath);
    return true;
}

function karaaltin_app_template_redirect(): void {
    if (!karaaltin_app_is_request() || karaaltin_app_should_bypass()) {
        return;
    }

    if (karaaltin_app_maybe_serve_dist_file()) {
        exit;
    }

    status_header(200);
    nocache_headers();

    echo '<!doctype html>';
    echo '<html ' . get_language_attributes() . '>';
    echo '<head>';
    echo '<meta charset="' . esc_attr(get_bloginfo('charset')) . '"/>';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>';
    wp_head();
    echo '</head>';
    echo '<body>';
    echo '<div id="root"></div>';
    wp_footer();
    echo '</body>';
    echo '</html>';
    exit;
}

add_action('template_redirect', 'karaaltin_app_template_redirect');

function karaaltin_app_activate(): void {
    karaaltin_app_add_rewrite_rule();
    flush_rewrite_rules();
}

function karaaltin_app_deactivate(): void {
    flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'karaaltin_app_activate');
register_deactivation_hook(__FILE__, 'karaaltin_app_deactivate');
