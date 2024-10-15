const DOMselectors = {
  header: document.querySelectorAll(".h1"),
  item: document.querySelectorAll(".li"),
  card: document.querySelector("#card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".card-form"),
  conatiner: document.querySelector(".container"),
};

document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values
    const title = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("image-url").value;

    // Validate the image URL
    if (!isValidImageUrl(imageUrl)) {
      alert("Please enter a valid image URL.");
      return; // Stop if the URL is invalid
    }

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2 class="card-header">${title}</h2>
      <img src="${imageUrl}" alt="User Image" class="card-img">
      <p>${description}</p>
      <button type="button" class="btn" id="remove">Remove</button>
  `;

    // Append the new card to the cards container
    document.getElementById("card-list").appendChild(card);

    // Clear the form fields for new input
    document.getElementById("card-form").reset();

    // Add event listener for the remove button
    card.querySelector("#remove").addEventListener("click", function () {
      card.remove();
    });
  });

// Function to validate the image URL
function isValidImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url);
}

// create the html for inputs , card and container aka where the card  go

// select/query the html form and get value from inputs

//turn vlaues into object Movie, Game, User whatevs

//insert card with object onto html

//add event listener for remove button in JS
