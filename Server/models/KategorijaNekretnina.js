const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const KategorijaNekretnina = sequelize.define('KategorijaNekretnina', {
    idKN: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    adresa: DataTypes.STRING,
    vrsta: DataTypes.STRING,
    broj_soba: DataTypes.INTEGER,
    kvadrata: DataTypes.INTEGER,
    opremljenost: DataTypes.STRING,
    sprat: DataTypes.INTEGER,
    grijanje: DataTypes.INTEGER,
    licenca_agenta: DataTypes.INTEGER,
    godina_izgradnje: DataTypes.DATE,
    orijentacija: DataTypes.STRING,
    pod: DataTypes.STRING,
    broj_kupatila: DataTypes.INTEGER,
  },{
    freezeTableName: true,
    timestamps: false,
});

  module.exports = KategorijaNekretnina;