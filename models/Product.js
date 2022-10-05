// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
    // how do i validate that this is a decimal?
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // how do i validate that this is numeric?
  },
  category: {
    type: DataTypes.INTEGER,
    references: {
      // how do i reference the 'category' model's 'id'
    }
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
}
);

module.exports = Product;
