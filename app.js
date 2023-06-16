const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to evolve API'})
});


// Listen To Server
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Evolve API is running on http://localhost:${port}`);
})