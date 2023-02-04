const ID = document.getElementById("ID");
const Username = document.getElementById("NAME");
const Mail = document.getElementById("EMAIL");
const Phone = document.getElementById("PHONE");
const Active = document.getElementById("ACTIVE");
const button = document.getElementById("updateBtn");

button.addEventListener("click", () => {
  var user = `{id:${ID.value},username:${Username.value},email:${Mail.value},phone:${Phone.value},active:${Active.value}}`;

  fetch("http://localhost:2000/updating/?person=" + user).then(
    alert("Updating succesful")
  );
});
