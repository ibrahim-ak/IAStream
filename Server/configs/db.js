const mongoose = require('mongoose');
const env = require("./env.js");
const username = env.DB_USERNAME;
const pw = env.DB_PASSWORD;
const DB = env.DB_NAME;
// to connect whith data base
const uri = `mongodb+srv://${username}:${pw}@iastreamdb.yi3hnzj.mongodb.net/${DB}?retryWrites=true&w=majority&appName=IAStreamDB`; 
mongoose.connect(uri)
     .then(() => console.log("Established a connection to the database"))
     .catch(err => console.log("Something went wrong when connecting to the database", err));