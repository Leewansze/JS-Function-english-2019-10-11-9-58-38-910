function reverseString(message){
  // wirte your code here
  var arr = [];
  for(var i = 0; i < message.length; i++){
    arr.push(message[i])  
  }
  var newArr = arr.reverse();
  return newArr.join('');
}
reverseString('hello'); // should return 'olleh'
