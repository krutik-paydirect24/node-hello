const express = require('express');
const router = express.Router();
const Currency = require('../models/currency'); // Adjust the path as necessary

// Route to fetch all currencies
router.get('/', async (req, res) => {
    try {
        const currencies = await Currency.findAll(); // Fetch all currencies
        res.json(currencies);
    } catch (error) {
        console.error('Error fetching currencies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
