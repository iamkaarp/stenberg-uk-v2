const express = require('express');
const path = require('path');
const app = express();

app.get('/api/test', (req, res) => {
    res.json({ msg: 'Success' });
});

app.use(express.static(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 5000;

app.listen(PORT);