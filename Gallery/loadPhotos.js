// Get the full path to the HTML document
const fullPath = document.location.pathname.toLowerCase();

// Extract the file name from the path
const galleryName = fullPath.split('/').pop().split('.');

const folderPath = './assets/' + galleryName[0]; // Replace with the folder path you want to use

fetch(`/.netlify/functions/listFiles?folderPath=${encodeURIComponent(folderPath)}`)
.then(response => response.json())
  .then(data => {
    // Handle the list of file names (data) received from the function
    console.log(data);

    const gallery = document.getElementById('gallery')

    for (let i = 0; i < data.length; i++) {
      const html = document.createElement("img");
      html.setAttribute("src", "../assets/" + galleryName[0] + "/" + data[i]);
      gallery.appendChild(html);

      console.log(data[i])
    }

  })
  .catch(error => {
    console.error(error);
  });