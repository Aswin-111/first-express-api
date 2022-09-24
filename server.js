const express = require('express');

const app = express();



function logger(req,res,next){
    console.log(req.method,req.url,new Date().getFullYear())
    next()
}
app.use(logger)
app.get('/',(req,res)=>{
    res.send('<h1>This is the home page</h1>')
})




app.listen(5000);