const express_server = require('express')()




function logger(req,res,next){
    console.log(req.method,req.url,new Date().getFullYear())
    next()
}
express_server.use(logger)





express_server.get('/',(req,res)=>{
    res.send('<h1>This is the home page</h1>')
})




express_server.listen(5000);