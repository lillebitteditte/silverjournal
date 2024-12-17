<?php
/*
Template Name: gallery-silverjournal
*/
?>

<?php get_header(); ?>
    
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
                    <div id="gallery-grid" class="grid-gallery"></div>
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

    
        
    <?php get_footer(); ?>
