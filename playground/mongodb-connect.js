const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server',err);
  }
  console.log('Connected to mongodb server');

  // db.collection('Todo').insertOne({
  //   text:"something to do",
  //   complete:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log("unable to insert todo");
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection("Users").insertOne({
  //   name:"viba",
  //   age:23,
  //   location:"coimbatore"
  // },(err,result)=>{
  //   if(err){
  //     return console.log("Unable to insert");
  //   }else{
  //     console.log(JSON.stringify(result.ops,undefined,2));
  //   }
  // });
  db.close();
});
