const application = require('express')()




function logger(req,res,next){
    console.log(req.method,req.url,new Date().getFullYear())
    next()
}
application.use(logger)
application.get('/',(req,res)=>{
    res.send('<h1>This is the home page</h1>')
})




application.listen(5000);