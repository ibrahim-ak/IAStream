const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/movie.routes.js');
require('dotenv').config();
const port = process.env.PORT;
require('./configs/movie.config');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api/movies', router);
app.listen(port, () => console.log(`Listening on port: ${port}`));