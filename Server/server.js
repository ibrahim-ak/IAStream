// Important modules import
const express = require('express');
const cors = require('cors');

// Directory modules import
const router = require('./routes/index.js');
const env = require("./configs/env.js");

// Environment value
const port = env.PORT;

// Database access
require('./configs/db.js');

// Server 
const app = express();


// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);


// Server connection
app.listen(port, () => console.log(`Listening on port: ${port}`));