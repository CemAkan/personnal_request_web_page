const User = require("./server");
var sequelize = require("./connect.js");

var personUpdate = (ID, username, email, phone, active) => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Successfull");

    User.findOne({
      where: {
        id: ID,
      },
    })
      .then((person) => {
        if (person) {
          if (phone.length == 0) {
            phone = person.phone;
          }
          if (active.length == 0) {
            active = person.active;
          }
          if (username.length == 0) {
            username = person.username;
          }
          if (email.length == 0) {
            email = person.email;
          }

          person
            .update({
              username: username,
              email: email,
              phone: phone,
              active: active,
            })
            .then((user) => console.log(user.dataValues));
        }
      })
      .catch((error) => console.log("Person can not found !!!"));
  });
};

module.exports = personUpdate;
