const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const port = 2112;

// Mongoose Configuration
const databaseName = "";
mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Document Schemas
const defaultSchema = {
  name: String,
  age: Number,
}
const Default = mongoose.model("Default", defaultSchema);

// Express & EJS Configuration
app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
