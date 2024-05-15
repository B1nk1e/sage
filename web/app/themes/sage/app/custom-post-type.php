<?php

/**
 * Register custom post type
 */

namespace App;

add_action('init', function () {
//    register_post_type('post_type', array(
//        'labels'            => array(
//            'name'           => __(''),
//            'singular_name'  => __(''),
//            'menu_name'      => __('', 'sage'),
//            'name_admin_bar' => __('', 'sage'),
//            'all_items'      => __('', 'sage'),
//            'add_new_item'   => __('Add new', 'sage'),
//            'new_item'       => __('Add new', 'sage'),
//        ),
//        'description'       => '',
//        'public'            => true,
//        'supports'          => array(
//            'title',
//            'thumbnail',
//            'custom-fields',
//            'page-attributes'
//        ),
//        'show_ui'           => true,
//        'show_in_menu'      => true,
//        'menu_position'     => 20,
//        'menu_icon'         => 'dashicons-megaphone',
//        'show_in_admin_bar' => true,
//        'show_in_nav_menus' => true,
//        'can_export'        => true,
//        'has_archive'       => true,
//        'hierarchical'      => true,
//        'capability_type'   => 'post'
//    ));

    flush_rewrite_rules(true);
});
