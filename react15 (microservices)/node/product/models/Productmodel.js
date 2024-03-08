const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/Database");


const product = sequelize.define('rajat18_product', {
  Id:
  {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  // Model attributes are defined here
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },

  category: {
    type: Sequelize.STRING,
    allowNull: false,

  },

});





module.exports = product;