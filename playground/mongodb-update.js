const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server',err);
  }
  console.log('Connected to mongodb server');

//findOneAndUpdate

// db.collection("Todo").findOneAndUpdate({
//   _id:new ObjectID("5865deafb480752948601ae7")
// },{
//   $set:{
//     complete:false
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

  db.collection("Users").findOneAndUpdate({
    name:"viba"
  },{
    $set:{
        name:"virat"
    },
    $inc:{
      age:5
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  // db.close();
});
