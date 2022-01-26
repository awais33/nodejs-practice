import mysql from "mysql2";

// create database connection

const db = mysql.createConnection({
    HOST: 'localhost',
    DB: 'node_db',
    USER: 'root',
    PASSWORD: '',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default db;