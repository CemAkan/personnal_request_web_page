const User = require("./server");
var sequelize = require("./connect.js");

var listing = (NAME) => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Successfull");
    User.findOne({
      where: {
        username: NAME,
      },
    }).then((row) => {
      try {
        console.log(`
                  ________________________________________
                  -> ID: ${row.dataValues.id},
                  -> USERNAME: ${row.dataValues.username},
                  -> EMAİL: ${row.dataValues.email},      
                  -> PHONE: ${row.dataValues.phone},      
                  -> ACTİVE: ${row.dataValues.active}     
                  ________________________________________`);
      } catch (error) {
        console.log("Person can not find !!!");
      }
    });
  });
};
module.exports = listing;
