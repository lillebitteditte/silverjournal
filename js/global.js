// MENU

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
      description: "The English Garden",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2024/12/The-English-Garden-Munich-2021_1-scaled.jpg",
    },
    {
      title: "2",
      info: "cph",
      description: "Backyard vibes",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2024/12/Munich_1-scaled.jpg",
    },
    {
      title: "3",
      info: "munich",
      description: "Eisbach surfer",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2024/12/Eisbach-surfer_Munich_1-scaled.jpg",
    },
  ];
  let currentIndex = 0;
  const carouselContainer = document.getElementById("carousel-container");
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("carousel-info");
  carouselContainer.parentNode.insertBefore(infoContainer, carouselContainer.nextSibling);
  
  // -------------------- MODAL FOR CAROUSEL ---------------------
  
  const carouselModal = document.getElementById("carousel-modal");
  const carouselModalImage = document.getElementById("carousel-modal-image");
  const carouselModalTitle = document.getElementById("carousel-modal-title");
  const carouselModalInfo = document.getElementById("carousel-modal-info");
  const carouselModalClose = document.getElementById("carousel-modal-close");
  
  // Show the carousel modal
  function showCarouselModal(picture) {
      carouselModalImage.src = picture.image;
      carouselModalTitle.textContent = picture.info;
      carouselModalInfo.textContent = picture.description;
      carouselModal.classList.remove("hide");
      carouselModal.style.display = "block";
      document.body.classList.add("no-scroll");
  }
  
  // Hide the carousel modal
  carouselModalClose.addEventListener("click", () => {
      carouselModal.style.display = "none";
      document.body.classList.remove("no-scroll");
  });
  
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
              <button class="plus-button">+</button>
          </div>
      `;
  
      // Add event listener for the plus button
      const plusButton = infoContainer.querySelector(".plus-button");
      plusButton.addEventListener("click", () => showCarouselModal(currentPicture));
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
  
  