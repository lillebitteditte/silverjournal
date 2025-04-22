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
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/English-garden-no-border-scaled.jpg" alt="Gallery Image 1">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/eisenbach-surf-no-border-scaled.jpg" alt="Gallery Image 2">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/placeholderCar.png" alt="Gallery Image 3">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/Early-morning-ferry-Kalundborg-no-border-scaled.jpg" alt="Gallery Image 4">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/Autobahn-outback-scaled.jpg" alt="Gallery Image 5">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/Hellerup-no-border-scaled.jpg" alt="Gallery Image 6">
            </div>
            <div class="gallery-slide">
                <img src="https://thesilverjournal.com/wp-content/uploads/2025/04/placerholderFriends.png" alt="Gallery Image 7">
            </div>

            </div>

            <div class="gallery-navigation">
                <div class="gallery-dot active" data-slide="0"></div>
                <div class="gallery-dot" data-slide="1"></div>
                <div class="gallery-dot" data-slide="2"></div>
                <div class="gallery-dot" data-slide="3"></div>
                <div class="gallery-dot" data-slide="4"></div>
                <div class="gallery-dot" data-slide="5"></div>
                <div class="gallery-dot" data-slide="6"></div>
                
            </div>
        </div>
       
        
        <div class="gallery-mobile-images" style="display: none;">
    <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/AA035-2.JPG?v=1737119977573" alt="Mobile Image 1">
    <img src="https://cdn.glitch.global/977d6639-74aa-4742-8855-39891de14bf9/Sofie_1.jpg?v=1737120083957" alt="Mobile Image 2">
    <img src="https://cdn.glitch.me/ece17432-589a-42ec-b065-50b7c80bc0db/3a.jpg?v=1743495984435" alt="Mobile Image 3">
    <!-- Add more mobile images here -->
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