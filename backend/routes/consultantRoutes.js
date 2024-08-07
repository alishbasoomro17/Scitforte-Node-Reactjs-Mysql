const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

// Register Route
router.post('/register', async (req, res) => {
    const {
        name,
        gender,
        chargeMode,
        country,
        timeSlot,
        services,
        experience,
        age,
        email,
        password,
     
    } = req.body;

    try {
        // Check if email already exists
        const emailCheckSql = 'SELECT * FROM consultants WHERE email = ?';
        db.query(emailCheckSql, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Database error occurred.' });
            }

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'Email already exists.' });
            }

            // Proceed to register the new consultant
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const sql = `INSERT INTO consultants (name, gender, charge_mode, country, time_slot, registration_date, experience, age, email, password, services) VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?, ?)`;

            db.query(sql, [name, gender, chargeMode, country, timeSlot, experience, age, email, hashedPassword, services], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ success: false, message: 'Database error occurred.' });
                }
                res.json({ success: true, message: 'Consultant registered successfully!' });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error occurred.' });
    }
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    
    const sql = 'SELECT * FROM consultants WHERE email = ?';
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
            res.send({ success: false, message: 'consultants not found' });
        }
    });
});

module.exports = router;
