const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
//require('dotenv').config();

const sequelize = new Sequelize('paydirectdb', 'admin', 'Pay12345', {
    host: 'paydirectdb.c9c6gu400tqa.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        connectTimeout: 60000  // Set to 60 seconds
    },
    logging: false  // Disable logging; remove or set to true for SQL query logging
});
// Create a Sequelize instance
/*const sequelize = new Sequelize( process.env.DB_NAME, null , null,
  {
    host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    authentication: {
      type: 'ntlm',
      options: {
        domain: process.env.DB_HOST,  
        userName: process.env.DB_USERNAME,  
        password: process.env.DB_PASSWORD,
      },
    },
    connectTimeout: 60000,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
  logging: false, // Set to true if you want to log SQL queries
});*/

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


// Export the instance and DataTypes
module.exports =  sequelize;
