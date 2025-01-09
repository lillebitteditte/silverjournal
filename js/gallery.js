
function initializeGallery(containerId, galleryData) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
  
    const modalContainer = document.getElementById("modal-container");
    const modalImage = document.getElementById("modal-image");
    const modalClose = document.getElementById("modal-close");
  
    const columns = [[], [], []];
    let linkItem = null;
  
    // SEPARATE THE PLUS BUTTON
    galleryData.forEach((item) => {
      if (item.type === "link") {
        linkItem = item;
        return;
      }
    });
  
    // IMAGES IN COLUMN
    galleryData.forEach((item, index) => {
      if (typeof item === "string") {
        const columnIndex = index % 3;
        const html = `<div class="photo" data-src="${item}" loading="lazy">
                        <img src="${item}" alt="" />
                      </div>`;
        columns[columnIndex].push(html);
      }
    });
  
    // PLUS BUTTON AS LAST IMAGE
    if (linkItem) {
      const linkHtml = `<div class="photo" id="plus-button-grid">
                          <a href="${linkItem.url}">
                            <img src="${linkItem.image}" alt="" />
                          </a>
                        </div>`;
      columns[2].push(linkHtml);
    }
  
    // RENDER COLUMNS
    columns.forEach((column) => {
      const div = document.createElement("div");
      div.className = "column";
      div.innerHTML = column.join("");
      grid.appendChild(div);
    });
  
    // MODAL FUNCTION
    grid.addEventListener("click", (event) => {
      const photoElement = event.target.closest(".photo");
      if (photoElement && !photoElement.closest("#plus-button-grid")) {
        const imageSrc = photoElement.dataset.src || photoElement.querySelector("img").src;
        modalImage.src = imageSrc;
        modalContainer.classList.remove("hide");
      }
    });
  
    // CLOSE MODAL
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

    // HORIZONTAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Directions_1-scaled.jpg",

    // VERTICAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Frederiksberg_1-scaled.jpg",

     // VERTICAL

     "https://thesilverjournal.com/wp-content/uploads/2024/12/The-Royal-Gardens-Frederiksberg_1-scaled.jpg",

    // HORIZONTAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Covid-in-Munich_1-scaled.jpg",

    // HORIZONTAL

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Early-morning-ferry-Kalundborg_1-scaled.jpg",


    {
      type: "link",
      url: "https://thesilverjournal.com/gallery",
      image: "https://cdn.glitch.global/2fb998cb-b7e3-4bf5-8d18-12cda316aedd/knap.png?v=1733129797384",
    },
  ];
  
  // PICTURES FOR GALLERY (gallery.html)
  const galleryPageData = [

 // HORIZONTAL
 "https://thesilverjournal.com/wp-content/uploads/2024/12/Directions_1-scaled.jpg",

 // VERTICAL
 "https://thesilverjournal.com/wp-content/uploads/2024/12/Frederiksberg_1-scaled.jpg",

 // HORIZONTAL
 "https://thesilverjournal.com/wp-content/uploads/2024/12/Covid-in-Munich_1-scaled.jpg",

 // HORIZONTAL

 "https://thesilverjournal.com/wp-content/uploads/2024/12/Early-morning-ferry-Kalundborg_1-scaled.jpg",


    // HORIZONTAL HORSE PIC
    
    "https://thesilverjournal.com/wp-content/uploads/2024/12/img026_1-scaled.jpg",

     // VERTICAL

 "https://thesilverjournal.com/wp-content/uploads/2024/12/The-Royal-Gardens-Frederiksberg_1-scaled.jpg",

    // HORIZONTAL
    "https://thesilverjournal.com/wp-content/uploads/2024/12/Hellerup_1-1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Munich-2021_1-scaled.jpg",

    "https://thesilverjournal.com/wp-content/uploads/2024/12/Oestrig_1-scaled.jpg"


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
  