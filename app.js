const express = require('express')
const {users} = require('./users')

const app = express()

app.get('/',(req, res)=>{
    res.json(users)
})



app.listen(3000,()=>{
    console.log("App is running...")
})