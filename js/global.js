const {href, protocol} = window.location
if (protocol === 'http:') {
  window.location.replace(`https${href.slice(4)}`)
}

// NEW FRONT PAGE 

// Fixed gallery.js script
document.addEventListener('DOMContentLoaded', () => {
  console.log("Gallery script loaded");
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    let currentSlide = 0;
    
    // Get the gallery container for touch events
    const galleryElement = document.querySelector('.gallery');
    
    // Swipe functionality variables
    let startX = 0;
    let endX = 0;
    let isSwiping = false;

    // Function to change slide
    function changeSlide(newIndex) {
        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Calculate new slide index (with wrap-around)
        currentSlide = (newIndex + slides.length) % slides.length;
        
        // Add active class to new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Touch start event
    galleryElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });

    // Touch move event
    galleryElement.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        endX = e.touches[0].clientX;
        e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });

    // Touch end event
    galleryElement.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        const swipeDiff = endX - startX;
        
        // Check if swipe was significant enough
        if (Math.abs(swipeDiff) > 50) {
            // Negative diff means swipe left (next slide)
            // Positive diff means swipe right (previous slide)
            changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
        }
        
        isSwiping = false;
    });

    // Click event for dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            changeSlide(slideIndex);
        });
    });

    // Add keyboard navigation (optional)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(currentSlide + 1);
        }
    });

    // Mouse swipe simulation (optional, for desktop users)
    let mouseDown = false;
    let mouseStartX = 0;
    let mouseEndX = 0;

    galleryElement.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseStartX = e.clientX;
        // Prevent default to stop text selection during swipe
        e.preventDefault();
    });

    galleryElement.addEventListener('mousemove', (e) => {
        if (!mouseDown) return;
        mouseEndX = e.clientX;
        e.preventDefault();
    });

    galleryElement.addEventListener('mouseup', () => {
        if (!mouseDown) return;
        
        const swipeDiff = mouseEndX - mouseStartX;
        
        if (Math.abs(swipeDiff) > 50) {
            changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
        }
        
        mouseDown = false;
    });

    // If mouse leaves the gallery, cancel the swipe
    galleryElement.addEventListener('mouseleave', () => {
        mouseDown = false;
    });
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
