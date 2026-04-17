const express = require('express');
const app = express();
const PORT = 8000;

// GET / endpoint
app.get('/', (req, res) => {
    res.status(200).json({ "message": "API is running" });
});

// GET /health endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ "message": "healthy" });
});

// GET /me endpoint
app.get('/me', (req, res) => {
    res.status(200).json({
        "name": "Charity Kalu",
        "email": "charitykalu825@gmail.com",
        "github": "https://github.com/CHARITY133"
    });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
