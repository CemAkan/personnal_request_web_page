const ID = document.getElementById("ID");
const button = document.getElementById("listBtn");

button.addEventListener("click", () => {
  fetch("http://localhost:2000/destroy/?id=" + ID.value).then(
    alert("Deleting Succesfull")
  );
});
