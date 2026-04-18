const express = require('express');
const app = express();
const PORT = 3000;

// Root endpoint - Fixes "root_endpoint" error
app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "HNG Stage 1 API"
    });
});

// Health endpoint - Fixes "health_endpoint" error
app.get('/health', (req, res) => {
    res.json({
        status: "UP"
    });
});

// Me endpoint - Fixes "me_endpoint" error
app.get('/me', (req, res) => {
    res.json({
        name: "Charity Kalu",
        email: "charitykalu825@gmail.com",
        github_url: "https://github.com/CHARITY133/hng-stage1-api",
        repo_name: "hng-stage1-api"
    });
});

// Protected endpoint - Fixes "auth_check" error
app.get('/protected', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    res.json({ message: "Authorized" });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
