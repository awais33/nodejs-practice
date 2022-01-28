const express = require('express')
const app = express();
app.use(express.json())
require("./db/index")
const User = require('./models/User')



app.post('/user', (req, res) => {
    const user = new User(req.body)
    console.log(user)
    user.save().then((response) => {
        console.log(response)
        res.send(user)
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(3000, () => {
    console.log('server is running in 3000')
})