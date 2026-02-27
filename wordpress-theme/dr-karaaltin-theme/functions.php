<?php
if (!defined('ABSPATH')) exit;

define('DRKARAALTIN_APP_DIR', get_template_directory() . '/app');
define('DRKARAALTIN_APP_URI', get_template_directory_uri() . '/app');

add_action('init', function () {
    add_rewrite_rule('^(?!wp-)(.*)$', 'index.php', 'top');
});

add_action('after_switch_theme', function () {
    flush_rewrite_rules();
});

add_action('wp_enqueue_scripts', function () {
    if (is_admin()) return;
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('global-styles');
}, 100);
