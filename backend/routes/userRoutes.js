const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scitforte'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
       
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO admins (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: 'Database error occurred.' });
            }
            res.send({ message: 'User registered successfully!' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error hashing password.' });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    
    const sql = 'SELECT * FROM admins WHERE email = ?';
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
            res.send({ success: false, message: 'Admin not found' });
        }
    });
});

module.exports = router;
