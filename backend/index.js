const express = require('express');
const app = express();

port = 3000

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`API rodando em localhost:${port}/`);
})
