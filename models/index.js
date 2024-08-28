const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config');
const Currency = require('../models/currency');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Routes
app.use('/api/currencies', currencyRoutes);

sequelize.sync({ alter: true }).then(() => {
   
    console.log('Database & tables are synced with alterations without deleting the data!');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
     });
})
.catch(err => {
    console.error('Error syncing database:', err);
});