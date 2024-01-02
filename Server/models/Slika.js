const { DataTypes } = require('sequelize')
const sequelize = require('../db');
const Artikal = require('./artikal');

const Slika = sequelize.define('Slika', {
    idS: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slika_link: DataTypes.STRING,
    idA: {
      type: DataTypes.INTEGER,
      references: {
        model: Artikal,
        key: 'idA',
      },
    },
  },{
    freezeTableName: true,
    timestamps: false,
  });

Slika.belongsTo(Artikal, { foreignKey: 'idA'});

module.exports = Slika