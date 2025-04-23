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

// end of code 