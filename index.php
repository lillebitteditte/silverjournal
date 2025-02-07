
<?php
/*
Template Name: homepage-silverjournal
*/
?>

<?php get_header(); ?>


<main> 
   
    <div class="carousel_wrapper">
      <button class="arrow-left">
        <svg 
        width="53" 
        height="16" 
        viewbox="0 0 53 16" 
        fill="none"
        >
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
          viewbox="0 0 53 16"
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

    <div id="carousel-modal" class="carousel-modal">
      
        <button id="carousel-modal-close">&times;</button>
      
          <img id="carousel-modal-image" alt="Modal Image" />
    
        <div class="modal-text-container">
          <h2 id="carousel-modal-title"></h2>
          <p id="carousel-modal-info"></p>
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

</main>

<?php get_footer(); ?>


