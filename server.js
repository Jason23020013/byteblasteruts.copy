const express = require('express');
const bodyParser = require('body-parser'); // 引入body-parser模块
const axios = require('axios'); // 用于发送HTTP请求的库

const app = express();
const PORT = 3000; // 后端服务器端口

// 使用body-parser中间件来解析req.body
app.use(bodyParser.json());

// 处理前端发送的问题的路由
app.post('/ask', async (req, res) => {
    try {
        const { question } = req.body; // 前端发送的问题，请确保你的前端能够将问题发送到这个路由
        const apiKey = 'sk-TaNogOVTyxveAlR1qrYqBMQmNMRpLuzQ08HxRJ2gKja2YBw0'; // 请替换为你的Google Gemini AI Studio API密钥
        const apiUrl = 'https://api.chatanywhere.com.cn/v1/models'; // Google Gemini AI Studio API地址

        // 发送POST请求给Google Gemini AI Studio API
        const response = await axios.post(`${apiUrl}/chat`, {
            input_text: question,
            key: apiKey
        });

        const answer = response.data.output_text; // 从API响应中获取回答

        // 将回答发送回前端，请确保你的前端能够处理这个回答
        res.json({ answer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
