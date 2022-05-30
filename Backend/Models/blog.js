const req = require('express/lib/request')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    text : {
        type: String,
        require: [true, 'Please add a text']
    }
}, {timestamps: true})

module.exports = mongoose.model("Blog", blogSchema);