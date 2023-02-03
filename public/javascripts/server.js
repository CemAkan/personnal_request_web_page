const sequelize = require("./connect.js");
const Sequelize = require("sequelize");

const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNUll: false,
    validate: {
      len: [1, 10],
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNUll: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNUll: true,
    validate: {
      len: [1, 20],
    },
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = User;

// var command = argv._[0];

// if (command === "de") {
//   module.exports = User;
//   if (argv.deleting === "yes") {
//     console.log("deleting succesfully");
//     var deleteDB = true;
//   } else {
//     var deleteDB = false;
//     console.log("deleting is not succesfull !!!");
//   }

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Successfull");
  })
  .catch(() => console.log("Not successfull !!!"));
