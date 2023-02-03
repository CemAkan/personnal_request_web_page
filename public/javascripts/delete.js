const ID = document.getElementById("ID");
const button = document.getElementById("deleteBtn");

button.addEventListener("click", () => {
  var user = `id=`;

  fetch("http://localhost:2000/destroy/?id=" + ID.value).then(
    alert("Deleting Succesfull")
  );
});
