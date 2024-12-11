// ----- MENU -------

function toggleMenu() {
    const menu = document.getElementById("menu-open");
    const burgerWrapper = document.querySelector(".burger-wrapper");
    
    menu.classList.toggle("active");
    burgerWrapper.classList.toggle("active");
  }
  
  // Hide menu when a menu item is clicked
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const menu = document.getElementById("menu-open");
      const burgerWrapper = document.querySelector(".burger-wrapper");
      
      menu.classList.remove("active");
      burgerWrapper.classList.remove("active");
    });
  });
  
  
  // KARRUSEL
  
  const heroPictures = [
      {
          title: "1",
          info: "munich",
          image: "https://cdn.glitch.global/8de00284-bf3e-4fe6-a6c9-eed9aed60a98/DSC05500.jpg?v=1732631757487"
      },
      {
          title: "2",
          info: "cph",
          image: "https://cdn.glitch.global/8de00284-bf3e-4fe6-a6c9-eed9aed60a98/DSC05504.jpg?v=1732631747874"
      }, 
      {
          title: "3",
          info: "bornholm",
          image: "https://cdn.glitch.global/8de00284-bf3e-4fe6-a6c9-eed9aed60a98/DSC05502-2.JPEG?v=1732631752668"
      }
  ];
  
  let currentIndex = 0;
  const carouselContainer = document.getElementById("carousel-container");
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("carousel-info");
  carouselContainer.parentNode.insertBefore(infoContainer, carouselContainer.nextSibling);
  
  // Clear existing images and create new ones
  function populateCarousel() {
      carouselContainer.innerHTML = ''; // Clear existing images
      heroPictures.forEach((picture) => {
          const imgElement = document.createElement("img");
          imgElement.src = picture.image;
          imgElement.alt = picture.title;
          imgElement.classList.add("carousel-item"); 
          carouselContainer.appendChild(imgElement);
      });
  }
  
  // Update carousel and info display
  function updateCarousel() {
      // Update carousel position
      carouselContainer.style.transform = `translateX(${-currentIndex * 75}%)`;
      
      // Update info and counter
      const currentPicture = heroPictures[currentIndex];
      infoContainer.innerHTML = `
          <div class="carousel-counter-info">
              <span class="counter">${currentIndex + 1}/${heroPictures.length}</span>
              <span class="image-info">${currentPicture.info}</span>
              <a href="/about.html"><button class="plus-button">+</button></a>
          </div>
      `;
  }
  
  // Ensure the event listeners are added after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
      const arrowLeft = document.querySelector(".arrow-left");
      const arrowRight = document.querySelector(".arrow-right");
  
      // Event listener for left arrow
      arrowLeft.addEventListener("click", () => {
        
          currentIndex = (currentIndex - 1 + heroPictures.length) % heroPictures.length;
          updateCarousel();
      });
  
      // Event listener for right arrow
      arrowRight.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % heroPictures.length;
        
          updateCarousel();
      });
  
      // Initial population and display
      populateCarousel();
      updateCarousel();
  });