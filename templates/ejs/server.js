const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const mongoose = require("mongoose");
const port = 2112;

// Mongoose Configuration
const databaseName = "";
mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Document Schemas
const defaultSchema = {
  name: String,
  age: Numbner,
}
const Default = mongoose.model("Default", defaultSchema);

// Express & EJS Configuration
app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.route("/")
  .get( (req, res) => {
    res.render("index");
  })
  .post( (req, res) => {
    // do something
  })
;

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
