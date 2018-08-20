const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/players', (req, res) => {
  axios.get('https://www.fantasyfootballnerd.com/service/players/json/d8hwmqs4g52u/')
    .then(apiRes => res.json(apiRes.data))
    .catch(err => console.error('Error connecting to API', err));
});

app.listen(3000);
