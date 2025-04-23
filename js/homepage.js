document.addEventListener('DOMContentLoaded', () => {
    console.log("Gallery script loaded");
    
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    const swipeIndicator = document.querySelector('.swipe-indicator');
    
    // Set initial state
    let currentSlide = 0;
    let galleryWidth = gallery.offsetWidth;
    
    // Check if on mobile
    const isMobile = window.innerWidth <= 768;
    
    // MOBILE IMAGE SWITCH - Restore your original mobile functionality
    if (isMobile) {
      const galleryContainer = document.querySelector(".gallery");
      const slideContainer = galleryContainer.querySelectorAll(".gallery-slide");
      const dotsContainer = document.querySelector(".gallery-navigation");
      const mobileImagesContainer = document.querySelector(".gallery-mobile-images");
      
      // Check if we have the required elements
      if (!galleryContainer || !dotsContainer || !mobileImagesContainer) {
        console.error("Missing required elements for mobile gallery setup");
        // If elements are missing, just use desktop setup
        setupGallery(slides, dots);
        return;
      }
      
      const mobileImages = mobileImagesContainer.querySelectorAll("img");
      
      // Make sure we actually have mobile images before replacing
      if (mobileImages && mobileImages.length > 0) {
        // Clear existing slides
        slideContainer.forEach(slide => slide.remove());
        
        // Clear dots container
        if (dotsContainer) {
          dotsContainer.innerHTML = "";
        }
        
        // Make mobile images container visible temporarily to access the images
        const originalDisplay = mobileImagesContainer.style.display;
        mobileImagesContainer.style.display = "block";
        
        // Create new slides with mobile images
       mobileImages.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.classList.add("gallery-slide");
    if (index === 0) slide.classList.add("active");
    slide.appendChild(img.cloneNode(true));
    galleryContainer.appendChild(slide); // Changed from insertBefore
    
    const dot = document.createElement("div");
    dot.classList.add("gallery-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-slide", index);
    dotsContainer.appendChild(dot);
  });
        
        // Hide mobile images container again
        mobileImagesContainer.style.display = originalDisplay;
        
        // Update references after DOM modifications
        const updatedSlides = document.querySelectorAll('.gallery-slide');
        const updatedDots = document.querySelectorAll('.gallery-dot');
        
        // Continue with setup using the new elements
        if (updatedSlides.length > 0) {
          setupGallery(updatedSlides, updatedDots);
        } else {
          console.error("Failed to create mobile slides, falling back to desktop setup");
          setupGallery(slides, dots);
        }
      } else {
        console.log("No mobile images found, using desktop setup");
        setupGallery(slides, dots);
      }
    } else {
      setupGallery(slides, dots);
    }
    
    
    
    function setupGallery(slidesElements, dotsElements) {
      // Set gallery height based on image height
      function setGalleryHeight() {
        if (!slidesElements || slidesElements.length === 0 || !slidesElements[currentSlide]) {
          console.error("Invalid slide elements in setGalleryHeight");
          return;
        }
        
        const activeSlide = slidesElements[currentSlide];
        const activeImg = activeSlide.querySelector('img');
        
        if (!activeImg) {
          console.error("No image found in active slide");
          return;
        }
        
        if (activeImg.complete) {
          gallery.style.height = `${activeImg.offsetHeight}px`;
        } else {
          activeImg.onload = () => {
            gallery.style.height = `${activeImg.offsetHeight}px`;
          };
        }
      }
      
      // Position all slides initially - Instagram-like continuous scroll
      function setupSlides() {
        galleryWidth = gallery.offsetWidth;
        
        if (!slidesElements || slidesElements.length === 0) {
          console.error("No slide elements found in setupSlides");
          return;
        }
        
        slidesElements.forEach((slide, index) => {
          // Calculate offset for continuous scroll effect
          const offset = ((index - currentSlide) * 100);
          slide.style.transform = `translateX(${offset}%)`;
          
          // Keep all slides in the flow with proper z-index
          slide.style.zIndex = index === currentSlide ? 2 : 1;
          
          // Remove active class from all slides
          slide.classList.remove('active', 'prev', 'next');
        });
        
        // Add proper classes
        if (slidesElements[currentSlide]) {
          slidesElements[currentSlide].classList.add('active');
        }
        
          const prevIndex = (currentSlide - 1 + slidesElements.length) % slidesElements.length;
    const nextIndex = (currentSlide + 1) % slidesElements.length;
    
    if (slidesElements[prevIndex]) {
      slidesElements[prevIndex].classList.add('prev');
    }
    
    if (slidesElements[nextIndex]) {
      slidesElements[nextIndex].classList.add('next');
    }
    
    // Update dot indicators
    if (dotsElements && dotsElements.length > 0) {
      dotsElements.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  }
      
      // Function to change slide
      function changeSlide(newIndex) {
        if (!slidesElements || slidesElements.length === 0 || !dotsElements || dotsElements.length === 0) {
          console.error("Invalid elements in changeSlide");
          return;
        }
        
        // Remove active class from current dot
        if (dotsElements[currentSlide]) {
          dotsElements[currentSlide].classList.remove('active');
        }
        
        // Update current slide index with wrap-around
        currentSlide = (newIndex + slidesElements.length) % slidesElements.length;
        
        // Add active class to new dot
        if (dotsElements[currentSlide]) {
          dotsElements[currentSlide].classList.add('active');
        }
        
         // Update slides positions for continuous effect
    slidesElements.forEach((slide, index) => {
      const offset = (index - currentSlide) * 100;
      slide.style.transform = `translateX(${offset}%)`;
      
      // Update z-index
      slide.style.zIndex = index === currentSlide ? 2 : 1;
      
      // Update classes
      slide.classList.remove('active', 'prev', 'next');
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index === (currentSlide - 1 + slidesElements.length) % slidesElements.length) {
        slide.classList.add('prev');
      } else if (index === (currentSlide + 1) % slidesElements.length) {
        slide.classList.add('next');
      }
    });
    
    // Update gallery height for new slide
    setGalleryHeight();
  }
      
      // Hide swipe indicator permanently
      function hideSwipeIndicator() {
        if (swipeIndicator) {
          swipeIndicator.style.opacity = '0';
          sessionStorage.setItem('swipeIndicatorShown', 'true');
        }
      }
      
      // Touch/Swipe handling
      let startX = 0;
      let currentX = 0;
      let isSwiping = false;
      let initialTransforms = [];
      
      gallery.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        hideSwipeIndicator();
        
        // Store initial position of each slide
        initialTransforms = [];
        slidesElements.forEach(slide => {
          // Remove transition during active swiping
          slide.classList.add('no-transition');
          // Store current transform
          const transform = window.getComputedStyle(slide).transform;
          try {
            initialTransforms.push(transform === 'none' ? 0 : new WebKitCSSMatrix(transform).m41);
          } catch (error) {
            // Fallback for browsers not supporting WebKitCSSMatrix
            const match = transform.match(/matrix.*\((.+)\)/);
            if (match && match[1]) {
              const values = match[1].split(', ');
              initialTransforms.push(values.length >= 5 ? parseFloat(values[4]) : 0);
            } else {
              initialTransforms.push(0);
            }
          }
        });
      }, { passive: true });
      
      gallery.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        
        // Move all slides according to swipe for continuous effect
        slidesElements.forEach((slide, index) => {
          if (index < initialTransforms.length) {
            const initialPos = initialTransforms[index];
            slide.style.transform = `translateX(calc(${initialPos}px + ${diffX}px))`;
          }
        });
      }, { passive: true });
      
      gallery.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        // Re-enable transitions
        slidesElements.forEach(slide => {
          slide.classList.remove('no-transition');
        });
        
        const swipeDiff = currentX - startX;
        const threshold = galleryWidth * 0.2; // 20% of gallery width
        
        if (Math.abs(swipeDiff) > threshold) {
          // Significant swipe - change slide
          changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
        } else {
          // Not significant - return to original position
          setupSlides();
        }
        
        isSwiping = false;
      });
      
      // Add click navigation for desktop
  // Add click navigation for desktop - click anywhere to advance
  function setupClickNavigation() {
    // Add click event to the entire gallery
    gallery.addEventListener('click', (e) => {
      // Ignore clicks on navigation dots or other controls
      if (e.target.closest('.gallery-dot') || e.target.closest('.gallery-navigation')) {
        return;
      }
      
      // Determine direction based on which half of the gallery was clicked
      const clickX = e.clientX;
      const galleryRect = gallery.getBoundingClientRect();
      const galleryCenter = galleryRect.left + (galleryRect.width / 2);
      
      // If clicked on left half, go to previous slide; if right half, go to next slide
      if (clickX < galleryCenter) {
        hideSwipeIndicator();
        changeSlide(currentSlide - 1);
      } else {
        hideSwipeIndicator();
        changeSlide(currentSlide + 1);
      }
    });
  }
      
      // Click event for dot navigation
      dotsElements.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          hideSwipeIndicator();
          changeSlide(index);
        });
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          hideSwipeIndicator();
          changeSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
          hideSwipeIndicator();
          changeSlide(currentSlide + 1);
        }
      });
      
      // Mouse swipe for desktop
      let mouseDown = false;
      let mouseStartX = 0;
      
      gallery.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseStartX = e.clientX;
        hideSwipeIndicator();
        
        // Store initial position of each slide
        initialTransforms = [];
        slidesElements.forEach(slide => {
          slide.classList.add('no-transition');
          const transform = window.getComputedStyle(slide).transform;
          try {
            initialTransforms.push(transform === 'none' ? 0 : new WebKitCSSMatrix(transform).m41);
          } catch (error) {
            // Fallback for browsers not supporting WebKitCSSMatrix
            const match = transform.match(/matrix.*\((.+)\)/);
            if (match && match[1]) {
              const values = match[1].split(', ');
              initialTransforms.push(values.length >= 5 ? parseFloat(values[4]) : 0);
            } else {
              initialTransforms.push(0);
            }
          }
        });
        
        e.preventDefault();
      });
      
      gallery.addEventListener('mousemove', (e) => {
        if (!mouseDown) return;
        
        const diffX = e.clientX - mouseStartX;
        
        // Move all slides according to mouse movement
        slidesElements.forEach((slide, index) => {
          if (index < initialTransforms.length) {
            const initialPos = initialTransforms[index];
            slide.style.transform = `translateX(calc(${initialPos}px + ${diffX}px))`;
          }
        });
      });
      
      gallery.addEventListener('mouseup', (e) => {
        if (!mouseDown) return;
        
        // Re-enable transitions
        slidesElements.forEach(slide => {
          slide.classList.remove('no-transition');
        });
        
        const swipeDiff = e.clientX - mouseStartX;
        const threshold = galleryWidth * 0.2;
        
        if (Math.abs(swipeDiff) > threshold) {
          changeSlide(currentSlide + (swipeDiff > 0 ? -1 : 1));
        } else {
          setupSlides();
        }
        
        mouseDown = false;
      });
      
      gallery.addEventListener('mouseleave', () => {
        if (mouseDown) {
          slidesElements.forEach(slide => {
            slide.classList.remove('no-transition');
          });
          setupSlides();
          mouseDown = false;
        }
      });
      
      // Check if swipe indicator was shown before
      if (sessionStorage.getItem('swipeIndicatorShown') === 'true' && swipeIndicator) {
        swipeIndicator.style.opacity = '0';
      }
      
      // Initialize gallery
      setupSlides();
      setGalleryHeight();
       setupClickNavigation();
      
      // Update on window resize
      window.addEventListener('resize', () => {
        galleryWidth = gallery.offsetWidth;
        setupSlides();
        setGalleryHeight();
      });
      
  
     
      
    }
  });