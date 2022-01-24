const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  database: "intershipdb",
  username: "intern",
  password: "internpass",
});
const Offer = db.define("offer", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  companyName: {
    type: Sequelize.DataTypes.STRING(40),
    allowNull: false
  },
  link: {
    type: Sequelize.DataTypes.STRING(150),
    allowNull: true
  },
  lastDate: Sequelize.DataTypes.DATEONLY,
  testDate: Sequelize.DataTypes.DATEONLY

});
module.exports = {
  db,Offer
}

// get: function() {
//        return moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD');
//      }
// function getDateWithoutTime(date) {
//     return require('moment')(date).format('YYYY-MM-DD');
// }
