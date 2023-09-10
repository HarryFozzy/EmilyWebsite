// adds selected class to the correct navigation button
var currentPage = window.location.pathname.split('/').pop();
document.querySelector('nav a[href="' + currentPage + '"]').classList.add("selected")

