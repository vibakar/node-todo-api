const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');

// var id="5867354c9347663684dd0374";
// if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
// }
          // Todo.find().then((todos)=>{
          //   console.log('Todos ',todos);
          // });
          //
          // Todo.findOne({_id:id}).then((todo)=>{
          //   console.log('Todo ',todo);
          // });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("ID not found");
//   }
//   console.log('Todo By Id ',todo);
// }).catch((e)=>console.log(e));

var id="5866657d8af3ab215887a965";
if(!ObjectID.isValid(id)){
  console.log("ID is invalid");
}

Users.findById(id).then((user)=>{
  if(!user){
    return console.log('Id not found');
  }
  console.log('Users',user);
}).catch((e)=>console.log(e));
