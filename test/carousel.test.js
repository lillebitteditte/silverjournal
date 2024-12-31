// carousel.test.js
import { JSDOM } from "jsdom";

describe("Carousel functionality", () => {
  let dom;
  let document;
  let heroPictures;

  beforeEach(() => {
    heroPictures = [
      { title: "1", info: "munich", description: "Description", image: "image1.jpg" },
      { title: "2", info: "cph", description: "Description", image: "image2.jpg" },
    ];
    dom = new JSDOM(`
      <div id="carousel-container"></div>
      <div id="carousel-modal"></div>
      <div id="carousel-modal-image"></div>
      <div id="carousel-modal-title"></div>
      <div id="carousel-modal-info"></div>
      <button id="carousel-modal-close"></button>
    `);
    document = dom.window.document;
  });

  it("should populate the carousel with images", () => {
    const carouselContainer = document.getElementById("carousel-container");

    const populateCarousel = () => {
      carouselContainer.innerHTML = ""; // Clear existing images
      heroPictures.forEach((picture) => {
        const imgElement = document.createElement("img");
        imgElement.src = picture.image;
        imgElement.alt = picture.title;
        imgElement.classList.add("carousel-item");
        carouselContainer.appendChild(imgElement);
      });
    };

    populateCarousel();

    expect(carouselContainer.children.length).toBe(heroPictures.length);
    expect(carouselContainer.children[0].src).toContain("image1.jpg");
    expect(carouselContainer.children[1].src).toContain("image2.jpg");
  });

  it("should update the carousel display based on the current index", () => {
    const carouselContainer = document.getElementById("carousel-container");
    const infoContainer = document.createElement("div");
    document.body.appendChild(infoContainer);
    let currentIndex = 0;

    const updateCarousel = () => {
      carouselContainer.style.transform = `translateX(${-currentIndex * 75}%)`;
      const currentPicture = heroPictures[currentIndex];
      infoContainer.innerHTML = `
        <div class="carousel-counter-info">
          <span class="counter">${currentIndex + 1}/${heroPictures.length}</span>
          <span class="image-info">${currentPicture.info}</span>
        </div>
      `;
    };

    currentIndex = 1; // Simulate moving to the next image
    updateCarousel();

    expect(carouselContainer.style.transform).toBe("translateX(-75%)");
    expect(infoContainer.textContent).toContain("2/cph");
  });
});
