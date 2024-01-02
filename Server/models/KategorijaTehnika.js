const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const KategorijaTehnika = sequelize.define('KategorijaTehnika', {
    idKT: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ram: DataTypes.INTEGER,
    interna: DataTypes.INTEGER,
    procesor: DataTypes.STRING,
    graficka: DataTypes.STRING,
    OS: DataTypes.STRING,
    proizvodjac: DataTypes.STRING,
    vrsta_graficke: DataTypes.STRING,
    rezolucija: DataTypes.STRING,
    velicina_ekrana: DataTypes.INTEGER,
    usb_portovi: DataTypes.INTEGER,
    baterija: DataTypes.STRING,
    garancija: DataTypes.INTEGER,
    fizicka_jezgra: DataTypes.INTEGER,
  },{
    freezeTableName: true,
    timestamps: false,
});

  module.exports = KategorijaTehnika