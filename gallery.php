<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap" rel="stylesheet">
    <link rel="icon" href="https://glitch.com/favicon.ico" />
  
    <title>The Silver Journal</title>
    
    <link rel="stylesheet" href="/global.css" />
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
