const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Auto-Approve Demo Web App</h1>
    <p>Your GitHub Actions pipeline deployed this successfully! 🎉</p>
  `);
});

// health check endpoint (useful for cloud)
app.get('/health', (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
