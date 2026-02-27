<?php
/**
 * Plugin Name: Dr. Karaaltin - Contact Form API
 * Description: REST endpoint to receive contact form submissions from the React app and send email via WordPress.
 * Version: 1.0.0
 * Author: Dr. Karaaltin
 */

if (!defined('ABSPATH')) exit;

add_action('rest_api_init', function () {
    register_rest_route('dr-karaaltin/v1', '/contact', [
        'methods'             => 'POST',
        'callback'            => 'dr_karaaltin_contact_submit',
        'permission_callback' => '__return_true',
        'args'                => [
            'firstName'      => ['required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'lastName'       => ['required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'email'          => ['required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_email'],
            'phone'          => ['required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'height'         => ['required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'weight'         => ['required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'areaOfInterest' => ['required' => false, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'concerns'       => ['required' => false, 'type' => 'string', 'sanitize_textarea_field'],
        ],
    ]);
});

add_filter('rest_pre_serve_request', function ($value) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    return $value;
}, 10, 1);

add_action('init', function () {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        exit;
    }
});

function dr_karaaltin_contact_submit(WP_REST_Request $request) {
    $firstName      = $request->get_param('firstName');
    $lastName       = $request->get_param('lastName');
    $email          = $request->get_param('email');
    $phone          = $request->get_param('phone') ?: '';
    $height         = $request->get_param('height') ?: '';
    $weight         = $request->get_param('weight') ?: '';
    $areaOfInterest = $request->get_param('areaOfInterest') ?: '';
    $concerns       = $request->get_param('concerns') ?: '';

    if (!is_email($email)) {
        return new WP_REST_Response(['success' => false, 'message' => 'Invalid email'], 400);
    }

    $admin_email = get_option('admin_email');
    $subject     = sprintf(
        '[%s] Nueva solicitud de consulta - %s %s',
        get_bloginfo('name'),
        $firstName,
        $lastName
    );

    $body = "Nueva solicitud desde el formulario de contacto:\n\n";
    $body .= "Nombre: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Teléfono: $phone\n";
    $body .= "Altura: $height\n";
    $body .= "Peso: $weight\n";
    $body .= "Área de interés: $areaOfInterest\n\n";
    $body .= "Mensaje / Preocupaciones:\n$concerns\n";

    $headers = ['Content-Type: text/plain; charset=UTF-8'];
    $sent    = wp_mail($admin_email, $subject, $body, $headers);

    if (!$sent) {
        return new WP_REST_Response(['success' => false, 'message' => 'Email could not be sent'], 500);
    }

    return new WP_REST_Response(['success' => true], 200);
}
