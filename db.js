const mongoose = require('mongoose')

const schema = mongoose.Schema ({
    name: String,
    joke: String
});
const model = mongoose.model("Joke", schema)
module.exports = model
