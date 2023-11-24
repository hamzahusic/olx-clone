const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define("Korisnik", {
    idK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    ime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     prezime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sifra: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adresa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    broj_telefona: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zadnja_prijava: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    slika_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },   
},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = User;
