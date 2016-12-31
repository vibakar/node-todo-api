const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');

Todo.remove({}).then((result)=>{
  console.log(result);
});

// Todo.findByIdAndRemove("586785a5f00f523688d08ac8").then((todo)=>{
//   console.log(todo);
// });
