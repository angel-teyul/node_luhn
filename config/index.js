require('dotenv').config();
const mysql = require('mysql');

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}

const conexion = mysql.createConnection({
    port: process.env.PORT || 4000,
    host: process.env.MY_HOST,
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
    database: process.env.MY_DATABASE
})

conexion.connect( (err) => {
    if (err) {
        console.log('Error de conexion', err);
        return err;
    }

    console.log('Conexion completada')
})

module.exports = { config, conexion };
