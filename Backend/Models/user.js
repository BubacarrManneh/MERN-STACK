const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // blog: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     require: true,
    //     ref: 'Blog'
    // },
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
        require: true,
        unique: true
    },
    password : {
        type: String,
        require: true
    }
}, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)