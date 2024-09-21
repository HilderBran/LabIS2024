require('dotenv').config();

module.exports = {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.PORT_DATABASE
    }
};
