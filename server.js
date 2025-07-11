const express = require("express");
const dotenv = require("dotenv").config();
const app = express();



//creating api for contacts 
app.use(`/api/contacts`, require("./routes/contactRoutes"));

const port = process.env.port || 5000;

app.listen(port, ()=>{
    console.log(`Your server is running ${port}`);
})