const express = require('express');
const cors = require('cors');

let fetch;

// Dynamically import 'node-fetch' using import()
(async () => {
    const fetchModule = await import('node-fetch');
    fetch = fetchModule.default;
})();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

app.get('/random-meal', async (req, res) => {
    try {
        if (!fetch) {
            throw new Error('Fetch module not imported yet');
        }

        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
