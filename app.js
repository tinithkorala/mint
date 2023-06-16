const express = require('express');
const dotenv = require('dotenv').config();

// App Configs
const app = express();

// Basic Route Handling
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to evolve API'})
});


// Listen To Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Evolve API is running on http://localhost:${port}`);
})
