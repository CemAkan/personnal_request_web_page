const Username = document.getElementById("user_name");
const Mail = document.getElementById("mail");
const Phone = document.getElementById("phone");
const Active = document.getElementById("active");
const button = document.getElementById("createBtn");

button.addEventListener("click", () => {
  var user = `{username:${Username.value},mail:${Mail.value},phone:${Phone.value},active:${Active.value}}`;

  fetch("http://localhost:2000/create/?person=" + user).then(
    alert("Işlem Başarili")
  );
});
