<?php
// Tilføj WooCommerce support
function my_theme_add_woocommerce_support() {
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'my_theme_add_woocommerce_support');

// Enqueue styles og scripts
function silverjournal_enqueue_scripts() {
    // Global styles og scripts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap', [], null, 'all');
    wp_enqueue_style('global-css', get_template_directory_uri() . '/css/global.css', [], '1.0.0', 'all');
    wp_enqueue_script('global-js', get_template_directory_uri() . '/js/global.js', [], '1.0.0', true);

    // Side-specifik CSS og JS
    if (is_front_page()) {
        wp_enqueue_style('homepage-css', get_template_directory_uri() . '/css/homepage.css', [], '1.0.0', 'all');
        wp_enqueue_script('homepage-js', get_template_directory_uri() . '/js/homepage.js', [], '1.0.0', true);
    }

    if (is_page_template('gallery.php')) {
        wp_enqueue_style('gallery-css', get_template_directory_uri() . '/css/gallery.css', [], '1.0.0', 'all');
        wp_enqueue_script('gallery-js', get_template_directory_uri() . '/js/gallery.js', [], '1.0.0', true);
    }

    if (is_page_template('about.php')) {
        wp_enqueue_style('about-css', get_template_directory_uri() . '/css/about.css', [], '1.0.0', 'all');
        wp_enqueue_script('about-js', get_template_directory_uri() . '/js/about.js', [], '1.0.0', true);
    }
}

add_action('wp_enqueue_scripts', 'silverjournal_enqueue_scripts');

// Fjern uønskede body-classes
function remove_body_classes($classes) {
    $classes = array_diff($classes, ['unnecessary-class1', 'unnecessary-class2']);
    return $classes;
}
add_filter('body_class', 'remove_body_classes');
