const express =require('express')
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const AuthRouter =require('./Routes/AuthRouter')

require('dotenv').config();
require('./Models/db')
const PORT =process.env.PORT || 8080;

// To test server is running
app.get('/ping',(req,res)=>{
    res.send('PONG');
})


app.use(bodyParser.json());
//Allow request from different port
app.use(cors())

app.use('/auth',AuthRouter)


app.listen(PORT ,() =>{
    console.log(`server is running on ${PORT}`)
})