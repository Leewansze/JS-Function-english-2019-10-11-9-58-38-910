function alphabetSort(message){
  var arr=[];
    for(var i = 0;i <message.length; i++){
        arr.push(message[i])
    }
    return  arr.sort().join('');
}
alphabetSort('hello'); // should return 'ehllo'
