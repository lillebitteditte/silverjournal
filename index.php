<?php
/*
Template Name: homepage-silverjournal
*/
?>

<?php get_header(); ?>


<main> 

<div class="swipe-indicator">
            <img src="https://cdn.glitch.global/ece17432-589a-42ec-b065-50b7c80bc0db/swipe-left.svg?v=1743497295684" alt="Swipe finger">     
        </div>

        <div class="gallery">
            <div class="gallery-slide active">
                <img src="https://cdn.glitch.global/ece17432-589a-42ec-b065-50b7c80bc0db/English%20garden%20no%20border.jpg?v=1743498303873" alt="Gallery Image 1">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/Directions_1.jpg?v=1737120042533" alt="Gallery Image 2">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/Munich_1.jpg?v=1737120073617" alt="Gallery Image 3">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/47859fd9-ba01-4974-8569-e34829bff88a/DSC05493-Edit_1.jpg?v=1738052321128" alt="Gallery Image 4">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/Directions_1.jpg?v=1737120042533" alt="Gallery Image 5">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/47859fd9-ba01-4974-8569-e34829bff88a/DSC05493-Edit_1.jpg?v=1738052321128" alt="Gallery Image 6">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/Munich_1.jpg?v=1737120073617" alt="Gallery Image 7">
            </div>
            <div class="gallery-slide">
                <img src="https://cdn.glitch.global/47859fd9-ba01-4974-8569-e34829bff88a/DSC05493-Edit_1.jpg?v=1738052321128" alt="Gallery Image 8">
            </div>

            <div class="gallery-navigation">
                <div class="gallery-dot active" data-slide="0"></div>
                <div class="gallery-dot" data-slide="1"></div>
                <div class="gallery-dot" data-slide="2"></div>
                <div class="gallery-dot" data-slide="3"></div>
                <div class="gallery-dot" data-slide="4"></div>
                <div class="gallery-dot" data-slide="5"></div>
                <div class="gallery-dot" data-slide="6"></div>
                <div class="gallery-dot" data-slide="7"></div>
            </div>
        </div>
       
       
    <!--- MODAL FOR CAROUSEL IMAGES --->

    <div id="carousel-modal" class="hide">
      <div class="modal-content">
        <button id="carousel-modal-close">&times;</button>
        <div class="modal-image-wrapper">
          <img id="carousel-modal-image" alt="Modal Image" />
        </div>
        <div class="modal-text-container">
          <h2 id="carousel-modal-title"></h2>
          <p id="carousel-modal-info"></p>
        </div>
      </div>
    </div>

    </div>

</main>

<?php get_footer(); ?>