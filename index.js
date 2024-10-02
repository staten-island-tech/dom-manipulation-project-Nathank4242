const DOMselectors = {
  header: document.querySelector("h1"),
  item: document.querySelectorAll("li"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

let student = {
  name: "student 1",
  age: 17,
  gf: true,
};

console.log(DOMselectors.card);

DOMselectors.button.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.parentElement.style.backgroundColor = "red";
});

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(document.querySelector("input").value);
});
