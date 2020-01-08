import "./styles.css";

//show our subjects we want to learn
const ul = document.querySelector("#list");
const input = document.querySelector("#input");

function displayList() {
  let newList = document.createElement("li");
  newList.innerHTML = "hello world";
  ul.appendChild(newList);
}

ul.addEventListener("click", function(event) {
  let target = event.target;
  if (target.tagName !== "LI") return;
  target.style.textDecoration = "line-through";
});
