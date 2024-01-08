const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const KategorijaVozilo = sequelize.define('KategorijaVozilo', {
    idKV: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    proizvodjac: DataTypes.STRING,
    model: DataTypes.STRING,
    kilometraza: DataTypes.STRING,
    broj_vrata: DataTypes.STRING,
    godiste: DataTypes.STRING,
    kubikaza: DataTypes.DECIMAL,
    kilovata: DataTypes.DECIMAL,
    gorivo: DataTypes.STRING,
    konjskih_snaga: DataTypes.STRING,
    tip: DataTypes.STRING,
    transmisija: DataTypes.STRING,
    registrovan_do: DataTypes.DATE,
    velicina_felgi: DataTypes.INTEGER,
    euro: DataTypes.INTEGER,
    pogon: DataTypes.STRING,
    mjesta: DataTypes.INTEGER,
  },{
    freezeTableName: true,
    timestamps: false,
});

module.exports = KategorijaVozilo;