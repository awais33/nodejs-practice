const express = require('express')
const db = require('mongodb')
const app = express()
const mongoClient = db.MongoClient

const url = "mongodb://127.0.0.1:27017"
const dbName = 'test-db'

mongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log("unable to connect with db")
    }

    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'saad',
    //     city: 'dgk'
    // })

    db.collection('users').findOne({name: 'saad'}, (error, user) => {
        if(error) {
           return console.log()            
        }

        console.log(user)
    })
})

