import { data } from "./data.js";

const displayImages = data
  .map((item) => {
    return `
    <img class="image_gallery" src="${item.src}">
    `;
  })
  .join("");

document.getElementById("image_root").innerHTML = displayImages;

const images = document.querySelectorAll(".image_gallery");

images.forEach((image) => {
  image.addEventListener("click", () => {
    // Toggle full size class for clicked image
    image.classList.toggle("imageFullSize");

    // Hide all other images
    images.forEach((img) => {
      if (img !== image) {
        img.classList.remove("imageFullSize");
        img.classList.toggle("hidden");
      }
    });
  });
});
