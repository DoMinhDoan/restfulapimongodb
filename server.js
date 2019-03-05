const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./Routes/bookRouter");
const app = express();
const port = process.env.PORT || 5656;

// Connecting to the database
const con = mongoose
  .connect(
    process.env.DB_ADDRESS,
    { useNewUrlParser: true } //need this for api support
  )
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/Books', bookRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

