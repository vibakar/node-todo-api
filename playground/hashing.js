// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var obj = {
  id : 5
};
var encrypt = jwt.sign(obj, 'secretstring');
var decrypt = jwt.verify(encrypt, 'secretstring');
console.log(decrypt);

// var msg = 'i am a mern stack developer';
// var hash = SHA256(msg).toString();
// console.log(`Original : ${msg}`);
// console.log(`Encrypted : ${hash}`);
//
// var data = {
//   id : 5
// };
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'mypassword').toString()
// };
//
// token.data.id = 18;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// resultHash = SHA256(JSON.stringify(token.data) + 'mypassword').toString();
// if(resultHash===token.hash){
//   console.log('trusted data');
// }else{
//   console.log('dont trust');
// }
