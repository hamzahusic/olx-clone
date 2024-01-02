const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const Artikal = require('./artikal')

const KategorijaCheckBoxDetalj = sequelize.define('KategorijaCheckBoxDetalj',{
    idKCB: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vrijednost_checkboxa:DataTypes.STRING,
      idA: {
        type: DataTypes.INTEGER,
        references: {
          model: Artikal,
          key: 'idA',
        },
      }
},{
    freezeTableName: true,
    timestamps: false,
})

KategorijaCheckBoxDetalj.belongsTo(Artikal, { foreignKey: 'idA'});

module.exports = KategorijaCheckBoxDetalj