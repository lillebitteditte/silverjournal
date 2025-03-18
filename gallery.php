<?php
/*
Template Name: gallery-silverjournal
*/
?>

<?php get_header(); ?>
    
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
