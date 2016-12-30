const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server',err);
  }
  console.log('Connected to mongodb server');

  // db.collection("Todo").find({_id:new ObjectID("58662d7ae4fffbf906a5b2e0")}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch",err);
  // });

  // db.collection("Todo").find().count().then((docs)=>{
  //   console.log(`count : ${docs}`);
  // },(err)=>{
  //   console.log("Unable to fetch",err);
  // });

  db.collection("Users").find({name:"virat"}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Unable to fetch",err);
  });
  
  // db.close();
});
