// adds selected class to the correct navigation button
const currentPage = window.location.pathname.split('/').pop();
console.log(currentPage);
const navButton = document.querySelector(`nav a[href='${currentPage}']`)
navButton.classList.add("selected")



