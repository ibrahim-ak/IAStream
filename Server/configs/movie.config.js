const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const DB =process.env.DB
// to connect whith data base 
const uri = `mongodb+srv://${username}:${pw}@mongodb1.5w1gh.mongodb.net/${DB}?retryWrites=true&w=majority&appName=mongodb1`; 
mongoose.connect(uri)
     .then(() => console.log("Established a connection to the database"))
     .catch(err => console.log("Something went wrong when connecting to the database", err));
