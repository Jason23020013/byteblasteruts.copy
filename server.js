const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Handle POST requests to '/ask'
app.post('/ask', async (req, res) => {
    try {
        const { question } = req.body;

        // Ensure the question is not empty
        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }

        // Call Gemini AI Studio API
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = 'https://api.gemini.ai/studio/v1';
        const response = await axios.post(`${apiUrl}/chat`, {
            input_text: question,
            key: apiKey
        });

        const answer = response.data.output_text;
        res.json({ answer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


