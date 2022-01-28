const mongoose = require('mongoose')
const { string } = require('yargs')

const User = mongoose.model('user', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = User