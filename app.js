const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Use the body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a POST route at the '/data' endpoint
app.post('/data', (req, res) => {
    // Log the request body to the console
    console.log(req.body);

    // Send a response back to the client
    res.status(200).send('Data received!');
});

// Define the port the server will listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));