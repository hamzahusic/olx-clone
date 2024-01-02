const { DataTypes } = require('sequelize')
const sequelize = require('../db');

const KategorijaVozilo = require('./KategorijaVozilo');
const KategorijaNekretnina = require('./KategorijaNekretnina');
const KategorijaOglasi = require('./KategorijaOglasi');
const KategorijaTehnika = require('./KategorijaTehnika');

const Artikal = sequelize.define("Artikal", {
    idA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    naslov: DataTypes.STRING,
    datum_promjene: DataTypes.DATE,
    lokacija: DataTypes.STRING,
    dostupno: DataTypes.BOOLEAN,
    stanje: DataTypes.STRING,
    cijena: DataTypes.INTEGER,
    opis: DataTypes.TEXT,
    idKV: {
      type: DataTypes.INTEGER,
      references: {
        model: KategorijaVozilo,
        key: 'idKV',
      },
    },
    idKN: {
      type: DataTypes.INTEGER,
      references: {
        model: KategorijaNekretnina,
        key: 'idKN',
      },
    },
    idKO: {
      type: DataTypes.INTEGER,
      references: {
        model: KategorijaOglasi,
        key: 'idKO',
      },
    },
    idKT: {
      type: DataTypes.INTEGER,
      references: {
        model: KategorijaTehnika,
        key: 'idKT',
      },
    },
  },{
    freezeTableName: true,
    timestamps: false,
  });

Artikal.belongsTo(KategorijaVozilo, { foreignKey: 'idKV'});
Artikal.belongsTo(KategorijaNekretnina, { foreignKey: 'idKN'});
Artikal.belongsTo(KategorijaOglasi, { foreignKey: 'idKO'});
Artikal.belongsTo(KategorijaTehnika, { foreignKey: 'idKT'});

/*sequelize.sync({ force: true }).then(() => {
    console.log('Tables synced');
}).catch(err => console.error('Error syncing tables:', err));
*/

module.exports = Artikal;