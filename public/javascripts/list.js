const NAME = document.getElementById("nameValue");
const button = document.getElementById("listBtn");

button.addEventListener("click", () => {
  fetch("http://localhost:2000/listone/?name=" + NAME.value);
});
