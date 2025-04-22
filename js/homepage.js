

document.addEventListener('DOMContentLoaded', function() {
  
    // If you want to ensure images are loaded before starting animations:
    const galleryImages = document.querySelectorAll('.gallery-slide img');
    let imagesLoaded = 0;
    
    function checkAllImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded === galleryImages.length) {
        // All images loaded, now we can start animations
        document.querySelector('h1').style.animation = 'fadeIn 1s ease forwards';
        
        // Delayed animation for gallery
        setTimeout(() => {
          document.querySelector('.gallery').style.animation = 'fadeIn 1s ease forwards';
        }, 1000);
        
        // Delayed animation for gallery navigation dots
        setTimeout(() => {
          document.querySelector('.gallery-navigation').style.animation = 'fadeIn 1s ease forwards';
        }, 1500);
        
        // Delayed animation for swipe indicator
        setTimeout(() => {
          document.querySelector('.swipe-indicator').style.animation = 'fadeInSwipe 4s forwards';
        }, 1500);
      }
    }
    
    // Check if images are already cached
    galleryImages.forEach(img => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
      }
    });
  });
  
  // NEW 
  
    document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    let currentSlide = 0;
    
    // Get the gallery container for touch events
    const galleryElement = document.querySelector('.gallery');
    const swipeIndicator = document.querySelector('.swipe-indicator');
    
    // Add CSS for slide transitions
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
    
    // Make sure gallery has proper height
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
    
    // Set initial classes for slides
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
    
    // Initial setup
    setupSlides();
    
    // Swipe functionality variables
    let startX = 0;
    let endX = 0;
    let isSwiping = false;
    
    // Function to change slide with direction
    function changeSlide(newIndex) {
        // Determine direction of slide change
        const direction = newIndex > currentSlide ? 1 : -1;
        
        // Handle wrap-around cases
        if (Math.abs(newIndex - currentSlide) > 1) {
            if (direction > 0 && newIndex < currentSlide) {
                // Wrapping from end to start
                newIndex = currentSlide + 1;
            } else if (direction < 0 && newIndex > currentSlide) {
                // Wrapping from start to end
                newIndex = currentSlide - 1;
            }
        }
        
        // Update dots
        dots[currentSlide].classList.remove('active');
        
        // Get the previous current slide
        const oldSlide = currentSlide;
        
        // Update current slide index with wrap-around
        currentSlide = (newIndex + slides.length) % slides.length;
        
        // Update dot navigation
        dots[currentSlide].classList.add('active');
        
        // Update slide classes for animation
        setupSlides();
    }
    
    // Hide swipe indicator permanently on any user interaction
    function hideSwipeIndicatorPermanently() {
      if (swipeIndicator) {
        swipeIndicator.style.opacity = '0';
        // Ensure it never shows again
        sessionStorage.setItem('swipeIndicatorShown', 'true');
      }
    }
    
    // Touch start event
    galleryElement.addEventListener('touchstart', (e) => {
        hideSwipeIndicatorPermanently();
        startX = e.touches[0].clientX;
        isSwiping = true;
    }, { passive: true });
    
    // Touch move event
    galleryElement.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        endX = e.touches[0].clientX;
    }, { passive: true });
    
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
            hideSwipeIndicatorPermanently();
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            changeSlide(slideIndex);
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            hideSwipeIndicatorPermanently();
            changeSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            hideSwipeIndicatorPermanently();
            changeSlide(currentSlide + 1);
        }
    });
    
    // Mouse swipe simulation (for desktop users)
    let mouseDown = false;
    let mouseStartX = 0;
    let mouseEndX = 0;
    
    galleryElement.addEventListener('mousedown', (e) => {
        hideSwipeIndicatorPermanently();
        mouseDown = true;
        mouseStartX = e.clientX;
        // Prevent default to stop text selection during swipe
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
    
    // If mouse leaves the gallery, cancel the swipe
    galleryElement.addEventListener('mouseleave', () => {
        mouseDown = false;
    });
    
    // Handle window resize
    window.addEventListener('resize', setGalleryHeight);
    
    // Make sure images are loaded
    window.addEventListener('load', setGalleryHeight);
    
    // Check if we've already shown the indicator in this session
    if (sessionStorage.getItem('swipeIndicatorShown') === 'true' && swipeIndicator) {
      // If we have, keep it hidden
      swipeIndicator.style.opacity = '0';
    }
  });