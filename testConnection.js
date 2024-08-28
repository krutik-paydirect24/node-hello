const mysql = require('mysql2');  // For MySQL
const config = {
    host: 'paydirectdb.c9c6gu400tqa.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Pay12345',
    database: 'paydirectdb',
    port: 3306,  // Use 1433 for MSSQL,
    connectTimeout: 60000
};

const connection = mysql.createConnection(config);

connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});
