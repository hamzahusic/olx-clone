const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    username: 'postgres',
      password: 'admintoor',
      database: 'OLX.ba',
      host: 'localhost',
      dialect: 'postgres',
      port : 5432
});

module.exports = sequelize;

