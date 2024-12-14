const express = require('express');
const app = express();

// Define the port the app will listen on
const PORT = process.env.PORT || 3000;

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello this is Areeba, Dockerized Node.js App! This is for the demo ');
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
