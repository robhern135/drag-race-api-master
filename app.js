const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const router = express.Router();

require('dotenv/config')

//Middleware
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


//Import Routes
const queensRoute = require('./routes/queens')

app.use('/', router)
app.use('/api/queens', queensRoute)

//Index.html
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));

  //__dirname : It will resolve to your project folder.
});

//Home Route
app.get('/api', ( req,res ) => {
  res.send('This is the ghome route of the api')
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