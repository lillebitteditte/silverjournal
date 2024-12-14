<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="https://glitch.com/favicon.ico" />

    <title>The Silver Journal</title>

    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/homepage.css" />
    <link rel="stylesheet" href="/gallery.css" />
  </head>
  <body>
    <header class="header">
      <div class="header-container">
        <div class="burger-wrapper" onclick="toggleMenu()">
          <div class="burger-icon">
            <svg
              width="33"
              height="27"
              viewbox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="burger-line line1"
                x="0"
                y="0"
                width="25"
                height="3"
                fill="var(--white)"
              />
              <rect
                class="burger-line line2"
                x="0"
                y="9"
                width="25"
                height="3"
                fill="var(--white)"
              />
              <rect
                class="burger-line line3"
                x="0"
                y="18"
                width="25"
                height="3"
                fill="var(--white)"
              />
            </svg>
          </div>
        </div>

        <div id="menu-open" class="menu-open">
          <a class="nav-item" href="/about.html">About</a>
          <a class="nav-item" href="/gallery.html">Gallery</a>
          <a class="nav-item" href="#">Shop</a>
          <a class="nav-item" href="#">Contact</a>
        </div>
      </div>

      <div class="logo">
        <a href="/">
          <img
            src="https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/Logo.png?v=1733733444313"
            alt="Logo"
            class="logo-img"
          />
        </a>
      </div>
    </header>

    <svg
      width="1062"
      height="2"
      viewbox="0 0 1082 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="line-top"
    >
      <line x1="1062" y1="1" y2="1" stroke="#FAFAFA" stroke-width="1" />
    </svg>

    <div class="carousel_wrapper">
      <button class="arrow-left">
        <svg width="53" height="16" viewbox="0 0 53 16" fill="none">
          <path
            d="M0.292893 7.29289C-0.0976311 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM1 9L53 9L53 7L1 7L1 9Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>

      <div class="carousel_container">
        <div class="carousel" id="carousel-container"></div>
      </div>

      <button class="arrow-right">
        <svg
          width="53"
          height="16"
          viewvox="0 0 53 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.7071 8.7071C53.0976 8.31658 53.0976 7.68341 52.7071 7.29289L46.3431 0.928928C45.9526 0.538404 45.3195 0.538404 44.9289 0.928928C44.5384 1.31945 44.5384 1.95262 44.9289 2.34314L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.7071ZM8.74228e-08 9L52 9L52 7L-8.74228e-08 7L8.74228e-08 9Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>
    </div>

    <!--- MODAL FOR CAROUSEL IMAGES --->

    <div id="carousel-modal" class="hide">
    <button id="carousel-modal-close">&times;</button>
    <div class="modal-content">
        <img id="carousel-modal-image" alt="Modal Image" />
        <div class="modal-text-container">
            <h2 id="carousel-modal-title"></h2>
            <p id="carousel-modal-info"></p>
        </div>
    </div>
</div>


    <div class="grid-container">
      <div class="grid-gallery">
        <div class="column">
          <div class="grid-container">
            <div id="dynamic-grid" class="grid-gallery"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-container" class="modal hide">
      <div class="modal-image-container">
        <span id="modal-close">&times;</span>
        <img id="modal-image" class="modal-content" />
      </div>
    </div>

    <footer class="footer">
      <div class="footer-info">
        <a class="footer-item" href="#">Instagram</a>
        <a class="footer-item" href="#">silverjournal@mail.com</a>
      </div>
    </footer>
    <script src="/global.js" defer></script>
    <script src="/gallery.js"></script>
  </body>
</html>