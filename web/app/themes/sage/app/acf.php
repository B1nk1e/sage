<?php

/**
 * ACF functions
 */

namespace App;

/**
 * Update the ACF json saving path
 *
 * @param string $path The path to the JSON save point
 *
 * @return string The adjusted path
 * @since    3.0
 *
 * @internal This function uses the `acf/settings/save_json` filter
 * @link     https://www.advancedcustomfields.com/resources/local-json
 *
 */

add_filter('acf/settings/save_json', function () {
    return get_template_directory() . '/config/fields';
});

/**
 * Update the ACF json loading path
 *
 * @param array $paths Array containing JSON paths
 *
 * @return array Adjusted array including custom path
 * @since    3.0
 *
 * @internal This function uses the `acf/settings/load_json` filter
 * @link     https://www.advancedcustomfields.com/resources/local-json
 *
 */

add_filter('acf/settings/load_json', function ($paths) {
    $paths[] = get_template_directory() . '/config/fields';

    return $paths;
});

/**
 * Show acf admin only if username is correct
 *
 * @return void
 * @link     https://www.advancedcustomfields.com/resources/acf-init
 *
 * @since    1.0
 *
 * @internal This function uses the `acf/init` action
 */

add_action('acf/init', function () {
    $admins = [
        'Enabl',
        'enabl'
    ];
    $current_user = wp_get_current_user();

    return (in_array($current_user->user_login, $admins));
});

/**
 * Adds an options page to the admin menu.
 *
 * @return array The validated and final page settings.
 * @link     https://www.advancedcustomfields.com/resources/acf_add_options_page
 *
 * @internal This function uses the `acf/init` action
 */

add_action('acf/init', function () {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => 'Opties',
            'menu_title' => 'Opties',
            'menu_slug'  => 'site-options',
            'capability' => 'edit_posts',
            'redirect'   => false
        ]);
    }
});
