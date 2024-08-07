const express = require('express');
const mysql = require('mysql2');

const bcrypt = require('bcrypt');

const router = express.Router();




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: '',   
    database: 'scitforte'  
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

router.post('/signup', async (req, res) => {
    const { name, contact, gender, profession, age, email, password } = req.body;

    try {

        db.query('SELECT * FROM clients WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Email already exists' });
            }

          
            const hashedPassword = await bcrypt.hash(password, 10);

            const query = 'INSERT INTO clients (name, contact, gender, profession, age, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
            db.query(query, [name, contact, gender, profession, age, email, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Database insert error:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                }
                res.status(201).json({ message: 'Registration successful' });
            });
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    
    const sql = 'SELECT * FROM clients WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: 'Database error occurred.' });
        }

        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                res.send({ success: true, message: 'Login successful!' });
            } else {
                res.send({ success: false, message: 'Invalid credentials' });
            }
        } else {
            res.send({ success: false, message: 'Client not found' });
        }
    });
});


module.exports = router;
