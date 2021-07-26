const express=require('express');
const path=require('path');
const validateTime = require("./middleware/timer");

const app = express();


var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
app.use(requestTime);
app.use(validateTime);


app.use(express.static(path.join(__dirname, 'View')));


app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'View','home.html'))
var responseText = 'Requested at:';
responseText +=  req.requestTime + 'ms';
console.log(responseText)
})


app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'View','contact.html'))
    var responseText = 'Requested at:';
    responseText +=  req.requestTime + 'ms';
    console.log(responseText)


})


app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,'View','service.html'))
    var responseText = 'Requested at:';
    responseText +=  req.requestTime + 'ms';
    console.log(responseText)

})


app.listen(5000,(err)=>
{
    err?console.log(err):
    console.log('server is running')
})
