const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

//Middle Ware
app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Hello From server the resort')
});

app.listen(port, () => {
    console.log('Listening the port', port);
})


