const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/authantication')

const mongoSchema = mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        age: Number
    }
)

module.exports = mongoose.model('authantication', mongoSchema)