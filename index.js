console.log("Bala Atchaya R")
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const dotenv = require('dotenv');
dotenv.config();
//importing product model
const product=require('./models/product.model');
//middleware to convert the json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000)
//routes
app.use('/api/products',productRoute);


//mongodb connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console .log('Connection error:',error));