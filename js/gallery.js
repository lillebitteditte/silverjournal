// Funktion til at initialisere et galleri
function initializeGallery(containerId, galleryData) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
  
    const modalContainer = document.getElementById("modal-container");
    const modalImage = document.getElementById("modal-image");
    const modalClose = document.getElementById("modal-close");
  
    const columns = [[], [], []];
    let linkItem = null;
  
    // Separate link item (e.g., "plus button")
    galleryData.forEach((item) => {
      if (item.type === "link") {
        linkItem = item;
        return;
      }
    });
  
    // Organize images into columns
    galleryData.forEach((item, index) => {
      if (typeof item === "string") {
        const columnIndex = index % 3;
        const html = `<div class="photo" data-src="${item}" loading="lazy">
                        <img src="${item}" alt="" />
                      </div>`;
        columns[columnIndex].push(html);
      }
    });
  
    // Add link item to the last column
    if (linkItem) {
      const linkHtml = `<div class="photo" id="plus-button-grid">
                          <a href="${linkItem.url}">
                            <img src="${linkItem.image}" alt="" />
                          </a>
                        </div>`;
      columns[2].push(linkHtml);
    }
  
    // Render columns
    columns.forEach((column) => {
      const div = document.createElement("div");
      div.className = "column";
      div.innerHTML = column.join("");
      grid.appendChild(div);
    });
  
    // Add modal functionality
    grid.addEventListener("click", (event) => {
      const photoElement = event.target.closest(".photo");
      if (photoElement && !photoElement.closest("#plus-button-grid")) {
        const imageSrc = photoElement.dataset.src || photoElement.querySelector("img").src;
        modalImage.src = imageSrc;
        modalContainer.classList.remove("hide");
      }
    });
  
    // Close modal
    modalClose.addEventListener("click", () => {
      modalContainer.classList.add("hide");
    });
  
    modalContainer.addEventListener("click", (event) => {
      if (event.target === modalContainer) {
        modalContainer.classList.add("hide");
      }
    });
  }
  
  // PICTURES FOR FRONTPAGE (index.html)
  const frontPageData = [
    "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/DSC05500.jpg?v=1733127950844",
    "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/DSC05502-2.JPEG?v=1733127964529",
    "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/DSC05504.jpg?v=1733127971633",
    "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/DSC05585.jpg?v=1733128070919",
    "https://cdn.glitch.global/d7f396b7-7572-4259-9986-224a88641815/DSC05501-2.JPEG?v=1734080564829",
    {
      type: "link",
      url: "https://thesilverjournal.dk/gallery",
      image: "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/knap.png?v=1733129797384",
    },
  ];
  
  // PICTURES FOR GALLERY (gallery.html)
  const galleryPageData = [
    "https://cdn.glitch.global/d7f396b7-7572-4259-9986-224a88641815/DSC05501-2.JPEG?v=1734080564829",
    "https://cdn.glitch.global/d7f396b7-7572-4259-9986-224a88641815/DSC05501-2.JPEG?v=1734080564829",
    "https://cdn.glitch.global/d7f396b7-7572-4259-9986-224a88641815/DSC05501-2.JPEG?v=1734080564829",
  ];
  
  // Automatisk initialisering baseret på hvilken side der er aktiv
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("dynamic-grid")) {
      // Forside
      initializeGallery("dynamic-grid", frontPageData);
    }
  
    if (document.getElementById("gallery-grid")) {
      // Galleri-siden
      initializeGallery("gallery-grid", galleryPageData);
    }
  });
  