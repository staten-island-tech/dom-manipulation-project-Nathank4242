const DOMselectors = {
  header: document.querySelectorAll("h1"),
  item: document.querySelectorAll("li"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".card-form"),
  conatiner: document.querySelector(".container"),
};

console.log(DOMselectors.card);

document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values
    const title = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("image-url").value;

    // Create a new card
    const card = document.createElement("div");
    card.className = "card";

    // Create the inner HTML of the card
    card.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
      <img src="${imageUrl}" alt="${title}">
  `;

    // Append the new card to the cards container
    document.getElementById("container").appendChild(card);

    // Clear the form fields for new input
    document.getElementById("card-form").reset();
  });

// document.getElementById('forms').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

// const name = document.getElementById("name").value;
// const description = document.getElementById("description").value;
// const image = document.getElementById("image").value;

// const card = document.createElement("div");
// card.classList.add("card");
// card.style.backgroundColor = color;

// // Add title and description to the card
// card.innerHTML = `<h3>${title}</h3><p>${description}</p>`;

// // Append the new card to the card container
// document.getElementById("cards").appendChild(card);

// // Clear the input fields
// document.getElementById("card-form").reset();

// DOMselectors.container.insertAdjacentHTML(
//   "beforeend",
//   `<div class="card"><h2 class= "card=header">${card.}</h2></div>`
// );

// create the html for inputs , card and container aka where the card  go

// select/query the html form and get value from inputs

//turn vlaues into object Movie, Game, User whatevs

//insert card with object onto html

//add event listener for remove button in JS
