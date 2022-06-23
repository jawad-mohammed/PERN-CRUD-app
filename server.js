const express = require('express')
const app = express()
const cors = require('cors')
const path  = require('path')
app.use(cors())
app.use(express.json())

app.use('/register',require('./routes/register'))

// app.get('/login',(req,res)=>{
// res.sendFile(path.join(__dirname,'views','index.html'))
// })

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})




app.listen(8000,()=>{
    console.log(`server is listening on 8000`);
})
