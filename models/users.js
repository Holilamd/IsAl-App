'use strict';
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(5)
    },
    name: {
      type: Sequelize.STRING(30)
    },
    email: {
      type: Sequelize.STRING(50)
    },
    phone_number: {
      type: Sequelize.STRING(15)
    },
    gender: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};