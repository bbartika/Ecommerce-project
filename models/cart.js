const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Cart = sequelize.define('cart', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });
  
  module.exports = Cart;
