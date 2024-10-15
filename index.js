const DOMselectors = {
  header: document.querySelectorAll(".h1"),
  item: document.querySelectorAll(".li"),
  card: document.querySelector("#card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

console.log(DOMselectors.card);

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let input = document.querySelector("input"); // Select the input field
  document.getElementById("test").textContent = input.value; // Display input value
  console.log(input.value); // Log the input value
});

const card = document.createElement("div");
card.className = "card";
card.innerHTML = `<h2>${title}</h2><p>${description}</p>`;

const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const color = document.getElementById("color").value;

//DOMselectors.container.insertAdjacentHTML(
//  "beforeend",
//  `<div class="card"><h2 class= "card=header">${card.}</h2></div>`
//);

// create the html for inputs , card and container aka where the card  go

// select/query the html form and get value from inputs

//turn vlaues into object Movie, Game, User whatevs

//insert card with object onto html

//add event listener for remove button in JS
