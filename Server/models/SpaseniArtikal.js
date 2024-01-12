const { DataTypes } = require('sequelize')
const sequelize = require('../db');
const Korisnik = require('./korisnik')
const Artikal = require('./artikal')

const SpaseniArtikal = sequelize.define("SpaseniArtikal",{
    idSO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    datum_spasavanja : DataTypes.DATE,
    idK: {
      type: DataTypes.INTEGER,
      references: {
          model: Korisnik,
          key: 'idK',
      },
    },
    idA: {
        type: DataTypes.INTEGER,
        references: {
            model: Artikal,
            key: 'idK',
        },
      }
},{
    freezeTableName: true,
    timestamps: false,
})

SpaseniArtikal.belongsTo(Artikal,{foreignKey:'idA'})
SpaseniArtikal.hasMany(Korisnik,{foreignKey:'idK'})

module.exports = SpaseniArtikal;