//TASK1!!!

let arr = new Array (2,3,4,5);
var res = 1;

for ( let i = 0; i < arr.length; i++){

    res = res * arr[i];
   
}console.log(res);

var iteration = 0;
var res1 = 1;
 while ( iteration < arr.length){
    res1 = res1 * arr[iteration];
    iteration ++;
    
 }console.log(res1);

//TASK2!!!

var  remainFromDivision_2 = 0;
for ( let i = 0; i  <= 15; i++){
    remainFromDivision_2 = i % 2;
    if (remainFromDivision_2 == 0){
        document.write("<br>" + i +" is even.");
    }else {
        document.write("<br>" + i + " is odd.");
    }
}

//TASK3!!!

function randArray(num) {
    var arr1 = [];
    var resRandom  ;
    for ( let i =0; i < num ; i++ ){
        resRandom = Math.floor( Math.random () * 500) + 1;
        arr1[i] = resRandom;
    }
    console.log(arr1);
}
randArray(5);

//TASK4!!!

var a = prompt("Введіть число",2);
var b = prompt("Введіть степінь",4);

function isInteger(num) {
    
    var res = num % 1;
    if (res == 0){
        return true;
    }else return false ;
  }
  
function raiseToDegree ( num1, num2 ) {

    if ( isInteger(num1) && isInteger(num2) ){
        if ( num2 == 0){
            return 1;
        } return num1 * raiseToDegree (num1 , num2 - 1);
    }else {
        document.write( "<br>" + "Введене число не ціле");
    }
}

var degree = raiseToDegree (a,b)
console.log(degree);


//TASK5!!!

function lastEl(masyv,num){
    var newArr = [];
    var j = 0;
    for ( let i = masyv.length -  num; i < masyv.length; i++ ){
        newArr[j] = arr[i];
        j++;
    }console.log(newArr);
}

lastEl(arr,2);
lastEl(arr,3);

//TASK6!!!

var line = "i love java script"
function stringToUpper (str) {
    var arr = Array.from(str); 
    //console.log(arr);
    var newStr = "" ;
    if(0 < arr.length){
        newStr += arr[0].toUpperCase();
    }

    for ( let i = 1; i <arr.length ; i++){
        newStr += arr[i];
        if ( arr[i] == " " ){
            newStr += arr[++i].toUpperCase();
        }
        
    }
    console.log(newStr);
     return newStr;
}
stringToUpper(line);