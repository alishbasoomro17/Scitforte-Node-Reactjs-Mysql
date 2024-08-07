const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const consultantRoutes = require('./routes/consultantRoutes');
const clientRoutes =require('./routes/clientRoutes');
const dashboardRoutes=require('./routes/dashboardRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/consultants', consultantRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/dashboard', dashboardRoutes

);

const PORT =  3200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
