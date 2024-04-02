<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cross-Origin Example</title>
</head>
<body>
    <h1>跨源请求示例</h1>
    <div id="content"></div>

    <script>
        // 使用 JavaScript 发起跨源请求
        const targetUrl = 'https://api.gemini.ai/studio/v1'; // 替换为您要请求的目标 URL
        fetch(targetUrl)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').textContent = data;
            })
            .catch(error => {
                console.error('请求失败：', error);
            });
    </script>
</body>
</html>
