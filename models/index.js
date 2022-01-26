const dbConfig = require('../config/database');

const sequelize = require('sequelize');
const sequelizeObj = new sequelize(dbConfig.DATABASE, dbConfig.PASSWORD, dbConfig.HOST, dbConfig.USER, {
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.sequelize = sequelize;
db.sequelizeObj = sequelizeObj;
db.tutorials = require('./user');

export default db;