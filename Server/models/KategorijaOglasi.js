const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const KategorijaOglasi = sequelize.define('KategorijaOglasi', {
    idKO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    spol: DataTypes.STRING,
  },{
    freezeTableName: true,
    timestamps: false,
});

module.exports = KategorijaOglasi