function my_theme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
add_action( 'after_setup_theme', 'my_theme_add_woocommerce_support' );


function silverjournal_enqueue_scripts() {
  // CSS
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap', [], null);
  wp_enqueue_style('global-css', get_template_directory_uri() . '/global.css', [], '1.0.0');
  wp_enqueue_style('homepage-css', get_template_directory_uri() . '/homepage.css', [], '1.0.0');
  wp_enqueue_style('gallery-css', get_template_directory_uri() . '/gallery.css', [], '1.0.0');
  wp_enqueue_style('about-css', get_template_directory_uri() . '/about.css', [], '1.0.0');
  wp_enqueue_style('style-css', get_template_directory_uri() . '/style.css', [], '1.0.0');

  // JavaScript
  wp_enqueue_script('global-js', get_template_directory_uri() . '/global.js', [], '1.0.0', true);
  wp_enqueue_script('gallery-js', get_template_directory_uri() . '/gallery.js', [], '1.0.0', true);
  wp_enqueue_script('about-js', get_template_directory_uri() . '/about.js', [], '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'silverjournal_enqueue_scripts');
