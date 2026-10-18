const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
    res.json({status: 'ok', message: 'Student Management API is running'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
