<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta
      name="description"
      content="A place for anyone interested in analog photography and art"
    />
    <meta
      name="keywords"
      content="photography, silver journal, portfolio, art photography, copenhagen, denmark, analog, photo prints"
    />
    <meta name="author" content="The Silver Journal" />
<meta name="robots" content="index, follow">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap" rel="stylesheet" />
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div class="header-wrapper">
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
      <a class="nav-item" href="https://thesilverjournal.com/about">About</a>
      <a class="nav-item" href="https://thesilverjournal.com/gallery">Gallery</a>
      <a class="nav-item" href="https://thesilverjournal.com/contact">Contact</a>
    </div>
  </div>
  <div class="logo">
          <a href="/">
            <picture>
              <img
                src="https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/Logo.png?v=1733733444313"
                class="desktop-logo"
                alt="The Silver Journal logo - Analog photographer in Copenhagen"
                width="731"
                height="41"
              />

              <img
                src="https://cdn.glitch.global/44d94b73-d8bc-4d79-ba31-5d94e07aea2f/phonelogo.png?v=1736940315840"
                class="phone-logo"
                alt="The Silver Journal logo - Analog photographer in Copenhagen"
                width="254"
                height="49"
              />
            </picture>
          </a>
        </div>
</header>

<div class="the-line">
        <svg
          viewbox="0 0 1082 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="line-top"
        >
          <line
            x1="0"
            y1="1"
            x2="830"
            y2="1"
            stroke="#FAFAFA"
            stroke-width="1"
          />
        </svg>
      </div>
  </div>
