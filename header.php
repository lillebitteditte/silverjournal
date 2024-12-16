<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap" rel="stylesheet" />
  <link rel="icon" href="https://glitch.com/favicon.ico" />
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="header">
  <div class="header-container">
    <div class="burger-wrapper" onclick="toggleMenu()">
      <div class="burger-icon">
        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect class="burger-line line1" x="0" y="0" width="25" height="3" fill="var(--white)" />
          <rect class="burger-line line2" x="0" y="9" width="25" height="3" fill="var(--white)" />
          <rect class="burger-line line3" x="0" y="18" width="25" height="3" fill="var(--white)" />
        </svg>
      </div>
    </div>
    <div id="menu-open" class="menu-open">
      <a class="nav-item" href="/about.html">About</a>
      <a class="nav-item" href="/gallery.html">Gallery</a>
      <a class="nav-item" href="/shop.html">Shop</a>
      <a class="nav-item" href="/contact.html">Contact</a>
    </div>
  </div>
  <div class="logo">
    <a href="/">
      <img src="https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/Logo.png?v=1733733444313" alt="Logo" class="logo-img" />
    </a>
  </div>
</header>
