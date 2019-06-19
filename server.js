const express = require('express');
const app = express();
const port = 80;
const path = require('path');
app.use(express.static(path.join(__dirname,'www')));


app.get('*',(req,res)=>{
    console.log(req.path);
    if(req.path=='/'){
        res.sendFile(path.join(__dirname,'www/index.html'));
    }else{
        console.log('home아님');
    }
})

app.listen(port,function(){
    console.log('server started prot[' + port + ']');
})