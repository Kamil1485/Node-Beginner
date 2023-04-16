module.exports=(req,res,next)=>{
    console.log(`${new Date().toUTCString()} ${req.method} ${req.hostname}`);
    next();//middleweare bir sonraki middleware e geçmesi için.
}