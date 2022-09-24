const server = require('express')()




function logger(req,res,next){
    console.log(req.method,req.url,new Date().getFullYear())
    next()
}
server.use(logger)
server.get('/',(req,res)=>{
    res.send('<h1>This is the home page</h1>')
})




server.listen(5000);