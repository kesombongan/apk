const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk menerima webhook
app.post('/webhook', (req, res) => {
    const data = req.body;
    console.log('Webhook received:', data);
    // Proses data
    res.status(200).send('Webhook received successfully');
});

// Menjalankan server
const PORT = process.env.PORT || 2026;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
