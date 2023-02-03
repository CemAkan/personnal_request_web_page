const Username = document.getElementById("username");
const Mail = document.getElementById("mail");
const Phone = document.getElementById("phone");
const Active = document.getElementById("active");
const button = document.getElementById("createBtn");
var User = require("./server");
var sequelize = require("./connect.js");

button.addEventListener("click", () => {
  sequelize.sync().then(() => {
    console.log("Successfull");

    User.create({
      username: Username.value,
      email: Mail.value,
      phone: Phone.value,
      active: Active.value,
    })
      .then((row) => alert("Create is successfull."))
      .catch(() => {
        alert("Create is not successfull !!!");
      });
  });
});
