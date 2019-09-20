
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const reciepeRoutes = require('./routes/recipe');
const app = express();

mongoose.connect('mongodb+srv://OCMaster:6ZP8h1djj5WF3GJq@ocproject-yc9fj.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
    
	
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/recipes',reciepeRoutes);


app.use((req,res,next)=> {
	console.log('Done');
});

module.exports = app;