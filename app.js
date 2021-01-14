const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')

//Middleware
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Import Routes
const queensRoute = require('./routes/queens')

app.use('/queens', queensRoute)

//Home Route
app.get('/', ( req,res ) => {
  res.send('We are on home!')
})


//Connect to DB
mongoose.connect(
  process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true  },
  () => console.log('connected to db')
)

const port = process.env.PORT || 4000;

//SPECIFY PORT
app.listen(port, function(){
  console.log(`server started successfully! listening on post ${port}`)
})