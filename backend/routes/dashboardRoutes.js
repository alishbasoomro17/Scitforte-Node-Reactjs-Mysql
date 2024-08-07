const express = require('express');
const mysql = require('mysql2');

const router = express.Router();




// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scitforte'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Routes
router.get('/stats', (req, res) => {
    const statsQuery = `
        SELECT 
            (SELECT COUNT(consultant_id) FROM consultants) AS totalConsultants,
            (SELECT COUNT(id) FROM clients) AS totalClients,
            (SELECT COUNT(id) FROM admins) AS totalAdmins,
            (SELECT COUNT(id) FROM clients) AS totalUsers
        FROM DUAL
    `;

    db.query(statsQuery, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log('Query Results:', results);
        res.json(results[0]);
    });
});

module.exports = router;