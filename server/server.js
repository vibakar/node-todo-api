var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {Users}=require('./models/users');

var app=express();

app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
  var newtodo= new Todo({
    text:req.body.text
  });

newtodo.save().then((result)=>{
  res.send(result);
},(err)=>{
  res.status(400).send(err);
});

app.get("/todos",(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err);
  });
});

});
app.listen(3000,()=>{
  console.log("server started");
});

module.exports={app};
