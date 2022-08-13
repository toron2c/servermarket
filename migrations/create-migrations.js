'use strict';
module.exports = {
  async up( queryInterface, Sequelize ) {
    await queryInterface.createTable( 'User', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      user_login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      user_password: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: false,
      }
    } ),
      await queryInterface.createTable( 'Product', {
        product_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNULL: false,
        },
        price: {
          type: Sequelize.INTEGER
        },
        url_img: {
          type: Sequelize.STRING,
          allowNULL: false,
          unique: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      } )

  },
  async down( queryInterface, Sequelize ) {
    await queryInterface.dropAllTables();
  }
};