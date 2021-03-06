require('./config/config');
var express=require('express');
var bodyParser=require('body-parser');
var _=require('lodash');
var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {Users}=require('./models/users');

var app=express();
const port=process.env.PORT;

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
});

app.get("/todos",(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err);
  });
});

app.get("/todos/:id",(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
    return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send());

});

app.delete("/todos/:id",(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send());
});


app.patch("/todos/:id",(req,res)=>{
  var id=req.params.id;
  var body=_.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt=new Date().getTime();
  }else{
    body.completed=false;
    body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>res.status(400).send());

});

app.post("/users",(req,res)=>{
  var body=_.pick(req.body,['email','password']);
  var newusers=new Users(body);

  newusers.save().then(()=>{
    return newusers.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(newusers);
  }).catch((err)=>{
      res.status(400).send();
  });
});

app.listen(port,()=>{
  console.log("server started");
});

module.exports={app};
