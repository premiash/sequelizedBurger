//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    // Giving the burgers model a id of type INTEGER
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
           	len: [1],
            notEmpty: true
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
        {

    	timestamps: false	
  });

  return burger;
};

