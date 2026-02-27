<?php
/**
 * Template principal: sirve la aplicación React (index.html de la build) con las URLs de recursos corregidas.
 */
if (!defined('ABSPATH')) {
    exit;
}

$app_dir  = DRKARAALTIN_APP_DIR;
$app_uri  = DRKARAALTIN_APP_URI;
$index_path = $app_dir . '/index.html';

if (!is_file($index_path)) {
    status_header(503);
    wp_die(
        '<h1>App no disponible</h1><p>Ejecuta <code>npm run build:theme</code> en la raíz del proyecto y sube la carpeta del tema a WordPress, incluyendo la carpeta <code>app/</code> con la build.</p>',
        'App no disponible',
        ['response' => 503]
    );
}

$html = file_get_contents($index_path);

// Sustituir rutas relativas ./ por la URL del tema/app para que carguen JS/CSS/imágenes
$html = preg_replace_callback(
    '~(src|href)=(["\'])(\.\/)([^"\']+)\2~',
    function ($m) use ($app_uri) {
        return $m[1] . '=' . $m[2] . $app_uri . '/' . $m[4] . $m[2];
    },
    $html
);

// Ajustar base si la app está en subcarpeta (opcional, para multisite o instalación en subcarpeta)
$base = '';
if (defined('DRKARAALTIN_APP_BASE') && DRKARAALTIN_APP_BASE !== '') {
    $html = preg_replace('~<base[^>]*>~', '<base href="' . esc_attr(DRKARAALTIN_APP_BASE) . '">', $html);
}

header('Content-Type: text/html; charset=utf-8');
echo $html;
