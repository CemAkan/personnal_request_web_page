const User = require("./server");
var sequelize = require("./connect.js");

var personDelete = (ID) => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Successfull");

    User.destroy({
      where: {
        id: ID,
      },
    }).then((deleting) => {
      if (deleting === 0) {
        console.log("Deleting is not successfull");
      } else {
        console.log(deleting + " object successfully deleted.");
      }
    });
  });
};

module.exports = personDelete;
