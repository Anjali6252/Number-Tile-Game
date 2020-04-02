const express= require('express');
const app= express();
const port= process.env.PORT|| 8000;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));
app.get('/calc', (req,res)=>{ // you should not override this parameters
    var action=req.query.action;
    var n1= req.query.n1;
    var n2= req.query.n2;
      // name this + operator ni hota kya // hota hai google karo thik  h bye
    if(action.toLowerCase()=='add'){
        var res1=parseInt(n1)+parseInt(n2);
        res.send(`Add ${res1}`);
    }   
    else if(action.toLowerCase()=='sub'){
        var res1=parseInt(n1)-parseInt(n2);
        res.send(`Sub ${res1}`);
    }
    else if(action.toLowerCase()=='mul'){
        var res1=parseInt(n1)*parseInt(n2);
        res.send(`Mul ${res1}`);
    }
    else if(action.toLowerCase()=='div'){
        var res1=parseInt(n1)/parseInt(n2);
        res.send(`Div ${res1}`);
    }
    
    
})