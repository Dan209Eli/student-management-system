const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// In-memory student database (temporary mock data)
const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" }
];

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Student Management API is running' });
});

// GET /api/students - Retrieve all registered students
app.get('/api/students', (req, res) => {
    res.json({ success: true, count: students.length, data: students });
});

// POST /api/students - Register a new student
app.post('/api/students', (req, res) => {
    const { name, email } = req.body;
    
    // Simple validation
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Please provide both name and email' });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        email
    };

    students.push(newStudent);
    res.status(201).json({ success: true, data: newStudent });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});