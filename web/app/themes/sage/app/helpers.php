<?php

/**
 * Theme helpers.
 */

namespace App;

/**
 * Returns custom menu array by registered menu. Children included if available
 *
 * @param string $navigation_name
 *
 * @return array New array with children included
 */
function custom_menu_object(string $navigation_name): array
{
    $locations                = get_nav_menu_locations();
    $get_primary_navigation   = wp_get_nav_menu_object($locations[$navigation_name]);
    $primary_navigation_items = wp_get_nav_menu_items($get_primary_navigation->term_id);

    $nav          = [];
    $nav_children = [];

    foreach ($primary_navigation_items as $item) {
        if (empty($item->menu_item_parent)) {
            $nav[$item->ID]              = [];
            $nav[$item->ID]['ID']        = $item->ID;
            $nav[$item->ID]['title']     = $item->title;
            $nav[$item->ID]['url']       = $item->url;
            $nav[$item->ID]['target']    = $item->target;
            $nav[$item->ID]['classes']   = $item->classes;
            $nav[$item->ID]['object_id'] = $item->object_id;
            $nav[$item->ID]['children']  = [];
        }
    }

    foreach ($primary_navigation_items as $item) {
        if ($item->menu_item_parent) {
            $nav_children[$item->ID]              = [];
            $nav_children[$item->ID]['ID']        = $item->ID;
            $nav_children[$item->ID]['title']     = $item->title;
            $nav_children[$item->ID]['url']       = $item->url;
            $nav_children[$item->ID]['target']    = $item->target;
            $nav_children[$item->ID]['parent']    = $item->menu_item_parent;
            $nav_children[$item->ID]['classes']   = $item->classes;
            $nav_children[$item->ID]['object_id'] = $item->object_id;
            $nav_children[$item->ID]['children']  = [];
            if (isset($nav[$item->menu_item_parent]['ID']) && $nav[$item->menu_item_parent]['ID'] == $item->menu_item_parent) {
                $nav[$item->menu_item_parent]['children'][$item->ID] = $nav_children[$item->ID];
            } elseif ($nav[$nav_children[$item->menu_item_parent]['parent']]['children'][$item->menu_item_parent]['ID'] == $item->menu_item_parent) {
                $nav[$nav_children[$item->menu_item_parent]['parent']]['children'][$item->menu_item_parent]['children'][$item->ID] = $nav_children[$item->ID];
            }
        }
    }

    return $nav;
}

/**
 * Returns custom menu object by registered menu
 *
 * @param string $table_name
 * @param string $post_type
 *
 * @return int Counter
 */
function get_rows_count(string $table_name, string $post_type): int
{
    global $wpdb;

    return $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE post_type = '$post_type' AND post_status = 'publish'");
}

/**
 * Returns cleaned phone number
 *
 * @param string $value
 *
 * @return string Replaced value based on regex
 */
function clean_phone_number(string $value): string
{
    $replaceValue = preg_replace('/[\[{\(].*?[\]}\)]/', '', $value);

    return preg_replace('/[^0-9]/', '', $replaceValue);
}

function check_image_source_exist($url) {
    if (file_exists(WEBROOT_DIR . '/app/uploads/' . $url)) {
        return true;
    } else {
        return false;
    }
}
