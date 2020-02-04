
//TASK1!!!
function testThrow (exception) {
    try {
        throw  exception  ;
    } catch(Error){
       console.log("catch : " + Error);
    }
}

testThrow(5);
testThrow("Test");
testThrow(new Error('An error happened'));

//TASK2!!
function calcRectangleArea(height , width){
    
    try {
        if (isNaN(height) || isNaN(width)){//перевірка на помилку
            throw exception;
        } else {
            var areaRectangle =  height * width;
            return console.log("Rectangle area is : " + areaRectangle);
        }

    }catch(exception){
        console.log(exception.name)
        console.log(exception.message);
        return
    
    }
    

}

calcRectangleArea( 6, 4);
calcRectangleArea( "gh7", 4);

//TASK3!!!
function checkAge(){
    var num = 0;
    num = prompt("What is your age", 18);
    try {
    
        if (isNaN(num)){//перевірка на помилку
             throw Error;
        }
        var age = Number (num);
        if (age = "" ||age < 14  ) {
            console.log(age);
            throw Error;}
            else alert("Ви отримали доступ до перегляду фільму");
    }catch(exception){
        alert(Error);
        console.log(exception.name)
        console.log(exception.message);
    }
    
}
checkAge();

//TASK4!!!

class MonthException {
    constructor(message,name){
        this.message = message;
        this.name = "MonthExeption";
            
        } 
}
function showMonthName (month){
    var monthOfTheYear =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    try{ 
        if (month >= 1 && month <= 12){
            return console.log(monthOfTheYear[month-1]);
        }else{throw  exception}
        
    } catch (exception){
        console.log(MonthException.name + " Incorrect month number");
    }
    
}
showMonthName(5);
showMonthName(14);
 
	