const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('Cards', cardSchema);