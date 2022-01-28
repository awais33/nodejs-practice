const express = require('express')
const app = express()
require("./db/index")
const User = require("./models/User")


const deleteUser = async (id) => {
    const countBefore = await User.countDocuments({name: 'awais'})
    console.log(countBefore)
    await User.findByIdAndDelete(id)
    const countAfter = await User.countDocuments({name: 'awais'})
    console.log(countAfter)
    return countAfter
}

deleteUser('61f38e7b594675ee2780bac0').then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
