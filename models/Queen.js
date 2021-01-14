//*Queen Model

const mongoose = require('mongoose')

const QueenSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  winner: {
    type: Boolean,
    required: true,
    default: false
  },
  home_town: {
    type: String,
    required: true
  },
  home_state: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  changed_name: {
    type: Boolean,
    required: true
  },
  new_name: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model( 'Queen', QueenSchema )

//BOILERPLATE
// {
//   "id": 1,
//   "name": "BeBe Zahara Benet",
//   "winner": true,
//   "home_town": "Minneapolis",
//   "home_state": " Minnesota",
//   "age": 28,
//   "changed_name": false,
//   "new_name": null,
//   "image": "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/ea/BeBeAS3Promo.png/revision/latest/scale-to-width-down/1000?cb=20181021181328"
// }