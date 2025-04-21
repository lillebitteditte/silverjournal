document.addEventListener('DOMContentLoaded', () => {
  const {href, protocol} = window.location;
  if (protocol === 'http:') {
    window.location.replace(`https${href.slice(4)}`);
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  function setupGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    let currentSlide = 0;

    function changeSlide(newIndex) {
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = (newIndex + slides.length) % slides.length;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
  
  // Apply transforms to position slides correctly
  slides.forEach((slide, index) => {
    const slideOffset = index - currentSlide;
    const galleryWidth = galleryElement.offsetWidth;
    slide.style.transform = `translateX(${slideOffset * galleryWidth}px)`;
  });
}

    const galleryElement = document.querySelector('.gallery');

    if (!galleryElement) return;

    // SWIPE - TOUCH
 
let startX = 0, endX = 0, startY = 0, endY = 0, isSwiping = false;
let initialOffset = 0;

// Add CSS for transitions
const styleElement = document.createElement('style');
styleElement.textContent = `
  .gallery-slide {
    transition: transform 0.8s ease-out;
    will-change: transform;
  }
  .gallery-slide.no-transition {
    transition: none;
  }
`;
document.head.appendChild(styleElement);

galleryElement.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  isSwiping = true;
  
  // Remove transition during swipe
  slides.forEach(slide => slide.classList.add('no-transition'));
  
  // Store the current slide for reference
  initialOffset = window.getComputedStyle(slides[currentSlide]).transform;
  initialOffset = initialOffset === 'none' ? 0 : parseFloat(initialOffset.split(',')[4]);
}, { passive: true });

galleryElement.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  endX = e.touches[0].clientX;
  endY = e.touches[0].clientY;
  
  // Calculate horizontal and vertical difference
  const diffX = endX - startX;
  const diffY = endY - startY;
  
  // If horizontal swipe is more significant than vertical, prevent scrolling
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
    e.preventDefault();
    
    // Move the current slide with finger
    const galleryWidth = galleryElement.offsetWidth;
    
    // Apply transforms to create the sliding effect
    slides.forEach((slide, index) => {
      const slideOffset = index - currentSlide;
      const translateX = diffX + (slideOffset * galleryWidth);
      slide.style.transform = `translateX(${translateX}px)`;
    });
  }
}, { passive: false });

galleryElement.addEventListener('touchend', () => {
  if (!isSwiping) return;
  
  // Add transition back for smooth animation
  slides.forEach(slide => slide.classList.remove('no-transition'));
  
  const swipeDiff = endX - startX;
  const threshold = galleryElement.offsetWidth * 0.2; // 20% of width
  
  if (Math.abs(swipeDiff) > threshold) {
    // Swipe was significant enough to change slide
    changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
  } else {
    // Swipe was not significant, reset positions
    slides.forEach((slide, index) => {
      const slideOffset = index - currentSlide;
      const galleryWidth = galleryElement.offsetWidth;
      slide.style.transform = `translateX(${slideOffset * galleryWidth}px)`;
    });
  }
  
  isSwiping = false;
});

    // DOTS
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));
        changeSlide(slideIndex);
      });
    });

    // KEYBOARD
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') changeSlide(currentSlide - 1);
      else if (e.key === 'ArrowRight') changeSlide(currentSlide + 1);
    });

    // MOUSE SWIPE (desktop)
    let mouseDown = false, mouseStartX = 0, mouseEndX = 0;
    galleryElement.addEventListener('mousedown', (e) => {
      mouseDown = true;
      mouseStartX = e.clientX;
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
  }

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