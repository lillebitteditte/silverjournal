
// Funktion til at initialisere et galleri
function initializeGallery(containerId, galleryData) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const modalContainer = document.getElementById("modal-container");
  const modalImage = document.getElementById("modal-image");
  const modalClose = document.getElementById("modal-close");

  const columnCount = window.innerWidth <= 768 ? 2 : 3;
  const columns = Array(columnCount).fill().map(() => []);
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
      const columnIndex = index % columnCount;
      const html = `<div class="photo" data-src="${item}" loading="lazy">
                      <img src="${item}" alt="" />
                    </div>`;
      columns[columnIndex].push(html);
    }
  });

  // Add link item to the last column
 if (linkItem) {
  const middleColumnIndex = Math.floor(columnCount / 2);
  const linkHtml = `<div class="photo" id="plus-button-grid">
                     <a href="${linkItem.url}">
                       <img src="${linkItem.image}" alt="" />
                     </a>
                   </div>`;
  columns[middleColumnIndex].push(linkHtml);
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

window.addEventListener('resize', () => {
  if (document.getElementById("dynamic-grid")) {
    document.getElementById("dynamic-grid").innerHTML = '';
    initializeGallery("dynamic-grid", frontPageData);
  }

  if (document.getElementById("gallery-grid")) {
    document.getElementById("gallery-grid").innerHTML = '';
    initializeGallery("gallery-grid", galleryPageData);
  }
});
  
  // PICTURES FOR FRONTPAGE (index.html)
  const frontPageData = [

    // VERTICAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Frederiksberg_1-scaled.jpg",

    // HORIZONTAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Directions_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Early-morning-ferry-Kalundborg_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Covid-in-Munich_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Oestrig_1-scaled.jpg",

    // VERTICAL

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Ditte-Marie_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Sofie_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/02/AA035-2-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/The-Royal-Gardens-Frederiksberg_1-scaled.jpg",




    {
      type: "link",
      url: "https://thesilverjournal.com/gallery",
      image: "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/knap.png?v=1733129797384",
    },
  ];
  
  // PICTURES FOR GALLERY (gallery.html)
  const galleryPageData = [

      // VERTICAL
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Frederiksberg_1-scaled.jpg",

      // HORIZONTAL
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Directions_1-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Early-morning-ferry-Kalundborg_1-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Covid-in-Munich_1-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Oestrig_1-scaled.jpg",
  
      // VERTICAL
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Ditte-Marie_1-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/Sofie_1-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/02/AA035-2-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2024/12/The-Royal-Gardens-Frederiksberg_1-scaled.jpg",

    // HORIZONTAL HORSE PIC
    
    "https://thesilverjournal.com/wp-content/uploads/2024/12/img026_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Hellerup_1-1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Munich-2021_1-scaled.jpg",     

    "https://thesilverjournal.com/wp-content/uploads/2024/12/T-rex-amen_1-scaled.jpg",


    // VERTICAL BALLOON

    "https://thesilverjournal.com/wp-content/uploads/2025/02/img046-50-percent-bicubic-sharper_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Covid-in-Munich_1-scaled.jpg",
    
    // vertical birdhouse

    "https://thesilverjournal.com/wp-content/uploads/2025/02/000046580008-2_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Autobahn-view_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/02/Royal-gardens_6-3_1-scaled.jpg",


  ];
  
  // AUTOMATIC GRID FROM WHICH PAGE

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
  