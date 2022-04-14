'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shirts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shirts.init({
    price: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    colour: DataTypes.STRING,
    size: DataTypes.STRING,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shirts',
  });
  return Shirts;
};