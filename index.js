const DOMselectors = {
  header: document.querySelectorAll("h1"),
  item: document.querySelectorAll("li"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  conatiner: document.querySelector(".container"),
};

console.log(DOMselectors.card);

DOMselectors.button.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.parentElement.style.backgroundColor = "red";
});

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let = input = document.querySelector("input");
  console.group(input.value);
  input.value = ";";
  console.log(input.value);
});

// select all buttons as node listt
const buttons = document.querySelectorAll("button");
// make array
const newButtons = Array.from(buttons);
// iterate through array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);

let movie = {
  title: "Star Wars",
  release: 1977,
};

DOMselectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card"><h2 class= "card=header">${movie.title}</h2></div>`
);

// create the html for inmputs , card and container aka nwhere the card s go

// select/query the htmol form and get value from inputs

//turn vlaues into pbject Movie, Game, User whatevs

//insert card with object onto html

//add event listener for remove button in JS
