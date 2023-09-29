// adds selected class to the correct navigation button
let currentPage = window.location.pathname.split('/').pop();

if (currentPage === "photos.html") {
  currentPage = "gallery.html"
} else if (currentPage === null || currentPage === "undefined" || !currentPage) {
  currentPage = "index.html"
}

const navButton = document.querySelector(`nav a[href='${currentPage}']`);
navButton.classList.add("selected");

