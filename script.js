// adds selected class to the correct navigation button
var currentPage = window.location.pathname.split('/').pop();
document.querySelector('nav a[href="' + currentPage + '"]').classList.add("selected")

//console log all he files in a folder
fetch('/.netlify/functions/listFiles')
.then(response => response.json())
.then(data => {
  // Handle the list of file names (data) received from the function
  console.log(data);
})
.catch(error => {
  console.error(error);
});

