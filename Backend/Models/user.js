const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email : {
        type: String,
        unique: true
    }
}, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('UserModel', userSchema)