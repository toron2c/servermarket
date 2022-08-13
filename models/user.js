'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( models ) {
      // define association here
    }
  }
  User.init( {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        notEmpty: { msg: "The field cannot be empty" }
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: false,
      primaryKey: true,
      validate: {
        notEmpty: { msg: "The field cannot be empty" }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: true
    },
    price: {
      type: DataTypes.INTEGER
    },
    url_img: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'User',
  } );
  return User;
};