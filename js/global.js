// NEW FRONT PAGE 

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-slide');
  const galleryImages = document.querySelectorAll('.gallery-slide img');
  const dots = document.querySelectorAll('.gallery-dot');
  const galleryElement = document.querySelector('.gallery');
  const swipeIndicator = document.querySelector('.swipe-indicator');
  let currentSlide = 0;
  let imagesLoaded = 0;

  // Add CSS dynamically
  const style = document.createElement('style');
  style.textContent = `
    .gallery {
        margin: 0 auto;
    }

    .gallery-slide {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        opacity: 1;
        transform: translateX(100%);
        transition: transform 1s ease;
    }

    .gallery-slide.active {
        display: block;
        transform: translateX(0);
        z-index: 1;
    }

    .gallery-slide.prev {
        transform: translateX(-100%);
        display: block;
        z-index: 0;
    }

    .gallery-slide.next {
        transform: translateX(100%);
        display: block;
        z-index: 0;
    }

    .gallery-slide img {
       width: auto;
       height: 34rem;
       margin: 0 auto;
    } 
  `;
  document.head.appendChild(style);

  function setGalleryHeight() {
    const activeSlide = document.querySelector('.gallery-slide.active');
    if (activeSlide) {
      const activeImg = activeSlide.querySelector('img');
      if (activeImg.complete) {
        galleryElement.style.height = activeImg.offsetHeight + 'px';
      } else {
        activeImg.onload = () => {
          galleryElement.style.height = activeImg.offsetHeight + 'px';
        };
      }
    }
  }

  function setupSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
        slide.classList.remove('prev', 'next');
      } else if (index === (currentSlide + 1) % slides.length) {
        slide.classList.add('next');
        slide.classList.remove('active', 'prev');
      } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
        slide.classList.remove('active', 'next');
      } else {
        slide.classList.remove('active', 'prev', 'next');
      }
    });
    setGalleryHeight();
  }

  function changeSlide(newIndex) {
    const direction = newIndex > currentSlide ? 1 : -1;

    if (Math.abs(newIndex - currentSlide) > 1) {
      if (direction > 0 && newIndex < currentSlide) {
        newIndex = currentSlide + 1;
      } else if (direction < 0 && newIndex > currentSlide) {
        newIndex = currentSlide - 1;
      }
    }

    dots[currentSlide].classList.remove('active');
    currentSlide = (newIndex + slides.length) % slides.length;
    dots[currentSlide].classList.add('active');

    setupSlides();
  }

  function hideSwipeIndicatorPermanently() {
    if (swipeIndicator) {
      swipeIndicator.style.opacity = '0';
      sessionStorage.setItem('swipeIndicatorShown', 'true');
    }
  }

  // Touch and mouse swipe
  let startX = 0, endX = 0, isSwiping = false;
  let mouseDown = false, mouseStartX = 0, mouseEndX = 0;

  galleryElement.addEventListener('touchstart', (e) => {
    hideSwipeIndicatorPermanently();
    startX = e.touches[0].clientX;
    isSwiping = true;
  }, { passive: true });

  galleryElement.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    endX = e.touches[0].clientX;
  }, { passive: true });

  galleryElement.addEventListener('touchend', () => {
    if (!isSwiping) return;
    const swipeDiff = endX - startX;
    if (Math.abs(swipeDiff) > 50) {
      changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
    }
    isSwiping = false;
  });

  galleryElement.addEventListener('mousedown', (e) => {
    hideSwipeIndicatorPermanently();
    mouseDown = true;
    mouseStartX = e.clientX;
    e.preventDefault();
  });

  galleryElement.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;
    mouseEndX = e.clientX;
  });

  galleryElement.addEventListener('mouseup', () => {
    if (!mouseDown) return;
    const swipeDiff = mouseEndX - mouseStartX;
    if (Math.abs(swipeDiff) > 50) {
      changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
    }
    mouseDown = false;
  });

  galleryElement.addEventListener('mouseleave', () => {
    mouseDown = false;
  });

  // Dots and keys
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      hideSwipeIndicatorPermanently();
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      changeSlide(slideIndex);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      hideSwipeIndicatorPermanently();
      changeSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
      hideSwipeIndicatorPermanently();
      changeSlide(currentSlide + 1);
    }
  });

  window.addEventListener('resize', setGalleryHeight);
  window.addEventListener('load', setGalleryHeight);

  // Track image loading
  function checkAllImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === galleryImages.length) {
      setupSlides();

      // Trigger animations
      document.querySelector('h1').style.animation = 'fadeIn 1s ease forwards';
      setTimeout(() => {
        galleryElement.style.animation = 'fadeIn 1s ease forwards';
      }, 1000);
      setTimeout(() => {
        document.querySelector('.gallery-navigation').style.animation = 'fadeIn 1s ease forwards';
      }, 1500);
      setTimeout(() => {
        if (swipeIndicator && sessionStorage.getItem('swipeIndicatorShown') !== 'true') {
          swipeIndicator.style.animation = 'fadeInSwipe 4s forwards';
        }
      }, 1500);
    }
  }

  galleryImages.forEach(img => {
    if (img.complete) {
      checkAllImagesLoaded();
    } else {
      img.addEventListener('load', checkAllImagesLoaded);
    }
  });

  // On page load, hide swipe indicator if needed
  if (sessionStorage.getItem('swipeIndicatorShown') === 'true' && swipeIndicator) {
    swipeIndicator.style.opacity = '0';
  }



  const isMobile = window.innerWidth <= 768;

 // MOBILE IMAGE SWITCH
 if (isMobile) {
  const galleryContainer = document.querySelector(".gallery");
  const slideContainer = galleryContainer.querySelectorAll(".gallery-slide");
  const dotsContainer = galleryContainer.querySelector(".gallery-navigation");
  const mobileImages = document.querySelectorAll(".gallery-mobile-images img");

  slideContainer.forEach(slide => slide.remove());
  dotsContainer.innerHTML = "";

  mobileImages.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.classList.add("gallery-slide");
    if (index === 0) slide.classList.add("active");
    slide.appendChild(img.cloneNode(true));
    galleryContainer.insertBefore(slide, dotsContainer);

    const dot = document.createElement("div");
    dot.classList.add("gallery-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-slide", index);
    dotsContainer.appendChild(dot);
  });

  setupGallery();
} else {
  setupGallery(); 
}

});


// -------------------- MODAL FOR CAROUSEL ---------------------

const carouselModal = document.getElementById("carousel-modal");
const carouselModalImage = document.getElementById("carousel-modal-image");
const carouselModalTitle = document.getElementById("carousel-modal-title");
const carouselModalInfo = document.getElementById("carousel-modal-info");
const carouselModalClose = document.getElementById("carousel-modal-close");

// Show the carousel modal
function showCarouselModal(picture) {
    console.log('Modal opened with:', picture); // Add debugging
    
    // Make sure elements exist
    if (!carouselModalImage || !carouselModalTitle || !carouselModalInfo) {
        console.error('Modal elements not found');
        return;
    }
    
    // Force content visibility
    carouselModalTitle.style.display = 'block';
    carouselModalInfo.style.display = 'block';
    
    // Set content
    carouselModalImage.src = picture.image;
    carouselModalTitle.textContent = picture.info;
    carouselModalInfo.textContent = picture.description;
    
    // Show modal
    carouselModal.classList.remove("hide");
    carouselModal.style.display = "flex";
    document.documentElement.classList.add("no-scroll");
}

// Hide the carousel modal
carouselModalClose.addEventListener("click", () => {
    carouselModal.style.display = "none";
    document.documentElement.classList.remove("no-scroll");
});







// FOOTER EMAIL COPY
function copyEmail(event) {
  const email = "thesilverjournal@outlook.com";
  
  // For modern browsers, use clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email)
      .then(() => {
        showCopyMessage();
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  } else {
    // Fallback for older browsers
    const input = document.createElement('input');
    input.value = email;
    input.style.position = 'fixed';
    input.style.opacity = 0;
    document.body.appendChild(input);
    
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    
    try {
      document.execCommand('copy');
      showCopyMessage();
    } catch (err) {
      console.error('Could not copy text: ', err);
    }
    
    document.body.removeChild(input);
  }
}

function showCopyMessage() {
  const copyMessage = document.querySelector('.copy-message');
  copyMessage.classList.add('show');
  
  // Hide the message after 2 seconds
  setTimeout(() => {
    copyMessage.classList.remove('show');
  }, 2000);
}
