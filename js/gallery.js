
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
      const html = `<div class="photo" data-src="${item}">
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
    "https://thesilverjournal.com/wp-content/uploads/2025/03/Frederiksberg-scaled.jpg",

    // HORIZONTAL
    "https://thesilverjournal.com/wp-content/uploads/2025/03/Directions-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Early-morning-ferry-Kalundborg-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Covid_in_Munich-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Oestrig-scaled.jpg",

    // VERTICAL

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Ditte_Marie-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Sofie-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/car_shine-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/The-Royal-Gardens-Frederiksberg-scaled.jpg",




    {
      type: "link",
      url: "https://thesilverjournal.com/gallery",
      image: "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/knap.png?v=1733129797384",
    },
  ];
  
  // PICTURES FOR GALLERY (gallery.html)
  const galleryPageData = [

      // VERTICAL
      "https://thesilverjournal.com/wp-content/uploads/2025/03/The-Royal-Gardens-Frederiksberg-scaled.jpg",

      // HORIZONTAL
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Directions-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Early-morning-ferry-Kalundborg-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Covid_in_Munich-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Oestrig-scaled.jpg",
  
      // VERTICAL
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Ditte_Marie-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/Sofie-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/car_shine-scaled.jpg",
  
      "https://thesilverjournal.com/wp-content/uploads/2025/03/The-Royal-Gardens-Frederiksberg-scaled.jpg",

    // HORIZONTAL HORSE PIC
    
    "https://thesilverjournal.com/wp-content/uploads/2025/03/police-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Hellerup-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Munich_2021_scooter-scaled.jpg",     

    "https://thesilverjournal.com/wp-content/uploads/2025/03/T-rex-amen-scaled.jpg",


    // VERTICAL BALLOON

    "https://thesilverjournal.com/wp-content/uploads/2025/03/floating_room-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Covid_in_Munich-scaled.jpg",
    
    // vertical birdhouse

    "https://thesilverjournal.com/wp-content/uploads/2025/03/wizards_home-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Autobahn_view-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2025/03/Royal-gardens_6-3-scaled.jpg",


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
  