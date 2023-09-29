// Get the full path to the HTML document
const URL_QUERY = new URLSearchParams(window.location.search);
const QUERY_GALLERY_NAME = URL_QUERY.get("Gallery");

const folderPath = './assets/' + QUERY_GALLERY_NAME; // Replace with the folder path you want to use

fetch(`/.netlify/functions/listFiles?folderPath=${encodeURIComponent(folderPath)}`)
.then(response => response.json())
  .then(data => {
    // Handle the list of file names (data) received from the function
    console.log(data);

    const gallery = document.getElementById('gallery')

    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div")
      const img = document.createElement("img");
      img.setAttribute("src", "../assets/" + QUERY_GALLERY_NAME + "/" + data[i]);
      div.appendChild(img);
      gallery.appendChild(div);

    }

  })
  .catch(error => {
    console.error(error);
  });

// const fs = import('fs');

// const images = fs.readdirSync(folderPath);

// images.forEach(image => {
//   const html = document.createElement("img");
//         html.setAttribute("src", "../assets/" + QUERY_GALLERY_NAME + "/" + image);
//         gallery.appendChild(html);
  
//         console.log(image)
// })