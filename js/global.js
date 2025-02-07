const {href, protocol} = window.location
if (protocol === 'http:') {
  window.location.replace(`https${href.slice(4)}`)
}


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

document.addEventListener("DOMContentLoaded", () => {
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
 
  const heroPictures = [
    {
      title: "1",
      info: "the english garden",
      description: "munich (2021)",
      image:
        "https://cdn.glitch.global/47859fd9-ba01-4974-8569-e34829bff88a/DSC05493-Edit_1.jpg?v=1738052321128",
    },
    {
      title: "2",
      info: "",
      description: "",
      image:
        "https://cdn.glitch.global/47859fd9-ba01-4974-8569-e34829bff88a/aboutHero_1000.png?v=1738659329069",
    },
    {
      title: "3",
      info: "eisbach surfer",
      description: "munich (2021)",
      image:
        "https://thesilverjournal.com/wp-content/uploads/2024/12/Eisbach-surfer_Munich_1-scaled.jpg",
    },
  ];
  
 const carouselContainer = document.getElementById("carousel-container");

  let currentIndex = 0;
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("carousel-info");
  carouselContainer.parentNode.insertBefore(infoContainer,     carouselContainer.nextSibling);

  
  // Update carousel and info
  function updateCarousel() {
    let translateValue;
    
    if (currentIndex === heroPictures.length - 1) {
     
      translateValue = -(currentIndex * 62) + "%"; 
    } else {
      
      translateValue = -(currentIndex * 75) + "%";
    }

    carouselContainer.style.transform = `translateX(${translateValue})`;
    
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


    // Handle arrow visibility
    arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
    arrowRight.style.display = currentIndex === heroPictures.length - 1 ? "none" : "block";
  }

  function populateCarousel() {
    carouselContainer.innerHTML = "";
    heroPictures.forEach((picture) => {
      const imgElement = document.createElement("img");
      imgElement.src = picture.image;
      imgElement.alt = picture.title;
      imgElement.classList.add("carousel-item");
      carouselContainer.appendChild(imgElement);
    });
  }

  // Left arrow event
  arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Right arrow event
  arrowRight.addEventListener("click", () => {
    if (currentIndex < heroPictures.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  populateCarousel();
  updateCarousel();



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


/*---------- SWIPE FUNCTION FOR MOBILE---------- */

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
    // Swipe left
    currentIndex = Math.min(currentIndex + 1, heroPictures.length - 1);
    updateCarousel();
    isSwiping = false;
  } else if (deltaX < -30) {
    // Swipe right
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
    isSwiping = false;
  }
});

// Touch end
carouselContainer.addEventListener("touchend", () => {
  isSwiping = false;
});
  
  });


// FOOTER EMAIL COPY
  function copyEmail(event) {
    const email = "thesilverjournal@outlook.com";
    
    // Create a temporary input element to hold the email address
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    
    // Select the text in the input field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element from the DOM
    document.body.removeChild(input);
    
  
  }