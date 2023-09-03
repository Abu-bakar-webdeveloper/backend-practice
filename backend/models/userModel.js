const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : [required, "please add a name"]
    },
    email: {
        type : String,
        required : [required, "please add an email"],
        unique: true
    },
    password: {
        type : String,
        required : [required, "please add a password"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)