//TASK1

var x = 1;
var y =2;
var res1 = String (x) + y;
console.log(res1);//"12"
console.log(typeof res1); //string

x = Boolean(x);
y = String(y);
var res2 = x+y;
console.log(res2); // "true2"
console.log(typeof res2);//"string"

var res3 = x+y;
res3 = !!res3;
console.log(res3); // true
console.log(typeof res3); // "boolean"


var res4 = String(x) / y;
console.log(res4); // NaN
console.log(typeof res4); // "number"

//TASK2!!!
//Я трошки ускладнила завдання 

document.write("TASK2!!!");
var num = prompt("Введіть початкове значення", "0");//користувач вводить початкову межу 
if (console.log(isNaN(num))){//перевірка на помилку
    num = prompt("Введіть початкове значення знову", "0");
}
var first = Number (num);


num = prompt("Введіть кінцеве значення ", "100");//користувач вводить кінцеву межу
if (console.log(isNaN(num))){//перевірка на помилку
    num = prompt("Введіть кінцеве значення знову", "100");
}
var last = Number (num);


document.write("<br>"+"Числа в діапазоні від "+first+" до "+last+". Які є додатніми, парними і кратними 7."+"<br>");

var i = first;//зберігання основного значення
var remainFromDivision_2=0,remainFromDivision_7=0;//змінні для %


while ( i<= last ){//цикл для пошуку необхідних чисел
    remainFromDivision_2 = i % 2;
    remainFromDivision_7 = i % 7;
    if ( i > 0 && remainFromDivision_2 == 0 && i!= 0){
        if ( remainFromDivision_7 ==0){
            document.write(i+"<br>");
            i++;
        }
    i++;
    }else i++;

}

//TASK3!!!

document.write("<br>"+"TASK3!!!");
var isAdult = confirm ("Ви повнолітні?");
var lesTenYears ;

if (isAdult){
    document.write("<br>"+"Ви досягли повнолітнього віку.")
}else if (lesTenYears = confirm("Вам менше 10 років?")){
    document.write("<br>"+"Ви ще надто молоді.")
}else {document.write("Ваш вік від 10 до 18.")}

//TASK4!!!

document.write("<br>"+"TASK4!!!");
num = prompt("Введіть першу 'a' сторону трикутника", "7");
if (console.log(isNaN(num)) || num <= 0 ){//перевірка на помилку і перевірка на від'ємні числа
document.write("<br>"+"Incorrect data1. ")
num = prompt("Введіть першу 'a' сторону трикутника знову", "7");
}
var a = Number (num);


num = prompt("Введіть другу'b' сторону трикутника", "10");
if (console.log(isNaN(num)) || num <= 0 ){//перевірка на помилку і перевірка на від'ємні числа
document.write("<br>"+"Incorrect data2. ")
num = prompt("Введіть другу 'b' сторону трикутника знову", "10");
}
var b = Number (num);


num = prompt("Введіть третю 'с' сторону трикутника", "12");
if (console.log(isNaN(num)) || num <= 0 ){//перевірка на помилку і перевірка на від'ємні числа
document.write("<br>"+"Incorrect data3. ")
num = prompt("Введіть другу 'c' сторону трикутника знову", "12");
}
var c = Number (num);


//перевірка чи трикутник? будь-які дві сторони більші за третю сторорну
function isItTriangle ( one,two,three){
    var result = true;
    var oneTwo = one+two;
    var twoThree = two+three;
    var oneThree = one+three;
    if (oneTwo > three){
        if(twoThree > one){
            if(oneThree >two){
                result = true;
            }else result = false;
        }else result = false;
    }else result = false;
    
    return result;

}
var triangle = isItTriangle(a,b,c);
console.log(triangle);
// шукаю площу трикутника  із півпериметра 
if (triangle){
    var halfPerimeter = (a+b+c)/2;
    console.log(halfPerimeter);
    var square = ( halfPerimeter * ( halfPerimeter - a ) * ( halfPerimeter - b ) * ( halfPerimeter - c )) ** 0.5;
    console.log(square.toFixed(3));
}

function isItRightTriangle(one,two,three){//перевірка чи прямокутний трикутник
    var sinA, sinB, sinC;//КУТИ шукаємо за т.сінусів із площі
    sinA = square/ (0.5 * (two*three));
    console.log(sinA);
    sinB = square/ ( 0.5 * (one*three));
    console.log(sinB);
    sinC = square/ (0.5 * (one*two));
    console.log(sinC);
    var result1 ;

        if ( sinA == 1 || sinB == 1 || sinC == 1){//sin 90 градусів (прямий кут) = 1 перевірка чи є прямий кут
            document.write("<br>"+"Трикутник є прямокутним");
            result1 = true;
        }else {
            document.write("<br>"+"Трикутник не прямокутний");
            result1 = false;} 
            return result1;
}

var rightTriangle = isItRightTriangle (a,b,c);
console.log(rightTriangle);

//TASK5!!!

document.write("<br>"+"TASK5!!!");
function whatHour() {
    var d = new Date();
    var n = d.getHours();
    return n;
  }
var hour = whatHour();

/// варіант1 if else
var c = 0;//змінна для перевірки switch case
document.write("<br>"+"Методом if else.");
if (hour >= 23 && hour <=5)
{
    document.write("<br>"+"Доброї ночі");
    c = 1;
}else if( hour >= 5 && hour <= 11 ){
    document.write("<br>"+"Доброго ранку");
    c = 2;
}else if( hour >= 11 && hour <= 17 ){
    document.write("<br>"+"Доброго дня");
    c = 3;
}else if( hour >= 17 && hour <= 23 ){
    document.write("<br>"+"Доброго вечора");
    c = 4;
}
//варіант2 
document.write("<br>"+"Методом switch case.")
 switch (c){
    
    case 1:
        document.write("<br>"+"Доброї ночі");
    break;

    case 2:
        document.write("<br>"+"Доброго ранку");
    break;

    case 3:
        document.write("<br>"+"Доброго дня");
    break;

    case 4:document.write("<br>"+"Доброго вечора");
    break;

 }

//TASK6!!!

document.write("<br>"+"TASK6!!!");
let arr = [];
arr[0] = -12;
arr[1] = "Ivanka";
arr[2] = null;
arr[3] = true;
document.write("<br>"+arr);
document.write("<br>"+"Довжина масиву - "+arr.length);//4
arr[4] = prompt("Введіть будь-яке значення","7");
document.write("<br>"+"5 елемент масиву - "+arr[4]);
document.write("<br>"+arr);

let arr2 = new Array (2,true,"str", null);
console.log(arr2);

