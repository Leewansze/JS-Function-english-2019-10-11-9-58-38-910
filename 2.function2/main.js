function palindrome(message){
  var resultStr = message.split('').reverse().join(''); 
  return resultStr === message;
}
palindrome('abcba'); // true
palindrome('hello'); // should return false
