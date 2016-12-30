const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server',err);
  }
  console.log('Connected to mongodb server');

  //deleteMany
  // db.collection("Todo").deleteMany({text:"had lunch"}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection("Todo").deleteOne({text:"had lunch"}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection("Todo").findOneAndDelete({text:"virat will score century"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection("Users").deleteMany({name:"virat"}).then((result)=>{
  //   console.log(result);
  // });

  db.collection("Users").findOneAndDelete({_id:new ObjectID("58664298e4fffbf906a5b974")}).then((result)=>{
    console.log(result);
  });
  
  // db.close();
});
