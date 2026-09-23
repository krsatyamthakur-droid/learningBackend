const express=require('express')
const app=express();

app.get('/sum/:firstarg/:secondarg',function(req,res){
    const a=parseInt(req.params.firstarg);
    const b=parseInt(req.params.secondarg);

    res.json({
        answer:a+b
    })
})
app.get('/multi/:firstarg/:secondarg',function(req,res){
    const a=parseInt(req.params.firstarg)
    const b=parseInt(req.params.secondarg);

    res.json({
        answer:a*b
    })
})
app.listen(4000)