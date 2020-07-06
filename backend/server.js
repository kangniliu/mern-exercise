const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express(); //create an express server
const port=process.env.PORT||5000; //make the server listen on port 5000

//attach the cors and express.json middleware 
//(since we will be sending and receiving json)
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);

});