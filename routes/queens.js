const express = require('express')
const router = express.Router()

const Queen = require('../models/Queen')


//TODO: BASE /queens route

//*ROUTES
//get delete post patch

///queens is intrisic because we defined it in app.use(/queens) in app.js

//*GET QUEENS
router.get('/', async ( req,res ) => {
  
  try {
    const queens = await Queen.find().sort({id: "asc"})
    res.json(queens)
    
  } catch(err) {
    res.json({ message: err })
  }

})

//*GET SPECIFIC QUEEN
router.get('/:id', async ( req, res ) => {
  try {
    // const singleQueen = await Queen.findById(req.params.queenId)
    const singleQueen = await Queen.find({ id: req.params.id })
    res.json(singleQueen)  
  } catch(err){
    res.json({ message: err })
  }
})


//*CREATE NEW QUEEN
router.post('/', async ( req, res ) => {
  const { id, name, winner, home_town, home_state, age, changed_name, new_name, image } = req.body

  //link up data
  const queen = new Queen({
    id: id,
    name: name,
    winner: winner,
    home_town: home_town,
    home_state: home_state,
    age: age,
    changed_name: changed_name,
    new_name: new_name,
    image: image
  })

  //send post and catch error
  try {
    const savedQueen = await queen.save()
    res.json(savedQueen)
  } catch(err){
    res.json({ message: err })
  }

})

//* DELETE QUEEN - by set _id not param.id 
router.delete('/:_id', async (req,res) => {
  try{
    const removedQueen = await Queen.deleteOne({
      _id: req.params._id
    })
    res.json(removedQueen)

  } catch(err){
    res.json({ message: err })
  }

})

//* EDIT QUEEN
router.patch('/:id', async (req,res) => {
  const { id, name, winner, home_town, home_state, age, changed_name, new_name, image } = req.body

  try{
    const updatedQueen = await Queen.updateOne({
      id: req.params.id
    },
    //these params can be changed
    {$set :{ id: id, name: name, winner: winner, home_town: home_town, home_state: home_state, age: age, changed_name: changed_name, new_name: new_name, image: image }}
    )
    res.json( updatedQueen )

  } catch(err){

  }
})


//and finally export it
module.exports = router