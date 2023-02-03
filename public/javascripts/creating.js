var User = require("./server.js");
var sequelize = require("./connect.js");

var personCreate = (username, email, phone, active) => {
  sequelize.sync().then(() => {
    console.log("Successfull");

    if (phone.length == 0) {
      phone = undefined;
    }
    if (active.length == 0) {
      active = undefined;
    }

    User.create({
      username: username,
      email: email,
      phone: phone,
      active: active,
    });
  });
};

module.exports = personCreate;
