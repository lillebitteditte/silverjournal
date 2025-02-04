// MENU

function toggleMenu() {
    const menu = document.getElementById("menu-open");
    const burgerWrapper = document.querySelector(".burger-wrapper");
  
    menu.classList.toggle("active");
    burgerWrapper.classList.toggle("active");
  }
  
  // Hide menu when item is clicked
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
      info: "the english garden",
      description: "munich (2021)",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2024/12/The-English-Garden-Munich-2021_1-scaled.jpg",
    },
    {
      title: "2",
      info: "",
      description: "",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2025/02/aboutHero_1000.png",
    },
    {
      title: "3",
      info: "eisbach surfer",
      description: "munich (2021)",
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
  
  // Show carousel modal
  function showCarouselModal(picture) {
      carouselModalImage.src = picture.image;
      carouselModalTitle.textContent = picture.info;
      carouselModalInfo.textContent = picture.description;
      carouselModal.classList.remove("hide");
      carouselModal.style.display = "block";
      document.body.classList.add("no-scroll");
  }
  
  // Hide carousel modal
  carouselModalClose.addEventListener("click", () => {
      carouselModal.style.display = "none";
      document.body.classList.remove("no-scroll");
  });
  
  // Clear existing images and create new ones
  function populateCarousel() {
      carouselContainer.innerHTML = ''; 
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
    let translateValue = -(currentIndex * 75) + "%";
    if (currentIndex === heroPictures.length - 1) {
        translateValue = -(currentIndex * 62) + "%";
    }

    carouselContainer.style.transform = `translateX(${translateValue})`;

    const currentPicture = heroPictures[currentIndex];

    // Move the existing arrows into the infoContainer
    infoContainer.innerHTML = ""; // Clear previous content
    infoContainer.appendChild(arrowLeft); // Move left arrow inside
    
    // Add counter
    const counter = document.createElement("span");
    counter.classList.add("counter");
    counter.textContent = `${currentIndex + 1}/${heroPictures.length}`;
    infoContainer.appendChild(counter);

    // Add image info only if it's NOT the second image
    if (currentIndex !== 1) {
        const imageInfo = document.createElement("span");
        imageInfo.classList.add("image-info");
        imageInfo.textContent = currentPicture.info;
        infoContainer.appendChild(imageInfo);

        // Add plus button
        const plusButton = document.createElement("button");
        plusButton.classList.add("plus-button");
        plusButton.textContent = "+";
        plusButton.addEventListener("click", () => showCarouselModal(currentPicture));
        infoContainer.appendChild(plusButton);
    }

    infoContainer.appendChild(arrowRight); // Move right arrow inside

    // Show/hide arrows based on position
    arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
    arrowRight.style.display = currentIndex === heroPictures.length - 1 ? "none" : "block";
}
  
  // Event listeners are added after the DOM isloaded
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
  
      
      populateCarousel();
      updateCarousel();
  });
  
  
// ------ SWIPE FUNCTION FOR MOBILE --------

let startX = 0;
let isSwiping = false;

// Touch start
carouselContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

// Touch move
carouselContainer.addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;

  if (deltaX > 30) {
    // LEFT SWIPE
    currentIndex = Math.min(currentIndex + 1, heroPictures.length - 1);
    updateCarousel();
    isSwiping = false;
  } else if (deltaX < -30) {
    // RIGHT SWIPE
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
    isSwiping = false;
  }
});

// Touch end
carouselContainer.addEventListener("touchend", () => {
  isSwiping = false;
});


// FOOTER EMAIL COPY
  function copyEmail(event) {
    const email = "thesilverjournal@outlook.com";
    
    // Create temporary input element to hold email address
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    
    // Select text in the input field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile 
    
    // Copy the text to clipboard
    document.execCommand('copy');
    
    // Remove temporary input element from the DOM
    document.body.removeChild(input);
    
    // Get position of the link (where user clicked)
    const rect = event.target.getBoundingClientRect();
    
    // Get message element
    const message = document.getElementById('copyMessage');
    
    // Position the message near the clicked link
    message.style.left = rect.left + window.scrollX + 'px';
    message.style.top = rect.top + window.scrollY - 30 + 'px'; // Position above the link
    
    // Display the message and set it to fade out
    message.innerText = 'Email copied to clipboard!';
    message.style.display = 'block';
    
   
    setTimeout(() => {
      message.style.opacity = '1';
    }, 10); 
    
    
    setTimeout(() => {
      message.style.opacity = '0';
    
      setTimeout(() => {
        message.style.display = 'none';
      }, 500);
    }, 2000);
  }