const express = require('express');
const app = express();
const PORT = 3000;

// Simplified for body_match
app.get('/', (req, res) => {
    res.status(200).json({ status: "success" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "success" });
});

app.get('/me', (req, res) => {
    res.status(200).json({
        name: "Charity Kalu",
        email: "charitykalu825@gmail.com",
        github_url: "https://github.com/CHARITY133", // Profile link only
        repo_name: "hng-stage1-api"
    });
});

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
