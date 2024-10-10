const DOMselectors = {
  header: document.querySelectorAll("h1"),
  item: document.querySelectorAll("li"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  conatiner: document.querySelector(".container"),
};

console.log(DOMselectors.card);

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let input = document.querySelector("input"); // Select the input field
  document.getElementById("test").textContent = input.value; // Display input value
  console.log(input.value); // Log the input value
});

//DOMselectors.container.insertAdjacentHTML(
//  "beforeend",
//  `<div class="card"><h2 class= "card=header">${card.}</h2></div>`
//);

// DOMselectors.button.addEventListener("click", function (event) {
//   console.log(event.target);
//   event.target.parentElement.style.backgroundColor = "red";
// });

// // select all buttons as node listt
// const buttons = document.querySelectorAll("button");
// // make array
// const newButtons = Array.from(buttons);
// // iterate through array and change each buttons color
// newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

// newButtons.forEach((button) =>
//   button.addEventListener("click", function (event) {
//     console.log(event.target.textContent);
//   })
// );

// let movie = {
//   title: "Star Wars",
//   release: 1977,
// };

// create the html for inputs , card and container aka where the card  go

// select/query the html form and get value from inputs

//turn vlaues into object Movie, Game, User whatevs

//insert card with object onto html

//add event listener for remove button in JS
