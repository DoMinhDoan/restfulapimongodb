const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./Routes/bookRouter");
const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
// const db = mongoose.connect(process.env.DB_ADDRESS);
// const db = mongoose.connect('mongodb://localhost:27017/mydb');
// const db = mongoose.connect('mongodb://dominhdoan:LoveStory@cluster0-shard-00-00-uloct.mongodb.net:27017/user-api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
// const db = mongoose.connect('mongodb://dominhdoan:LoveStory@cluster0-shard-00-00-uloct.mongodb.net:27017,cluster0-shard-00-01-uloct.mongodb.net:27017,cluster0-shard-00-02-uloct.mongodb.net:27017/user-api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
// const db = mongoose.connect('mongodb+srv://dominhdoan:LoveStory@cluster0-uloct.mongodb.net/user-api?retryWrites=true');

const mURI ='mongodb://dominhdoan:LoveStory@cluster0-shard-00-00-uloct.mongodb.net:27017,cluster0-shard-00-01-uloct.mongodb.net:27017,cluster0-shard-00-02-uloct.mongodb.net:27017/user-api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

const con = mongoose
  .connect(
    mURI,
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

