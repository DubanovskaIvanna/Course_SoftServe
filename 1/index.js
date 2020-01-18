console.log("Dubanovska");

var One ,Two;
One = 1;
Two = "Hello world";
document.write("<br>"+"Перша змінна - "+One+", друга змінна - "+Two+".");

Two = One;

document.write("<br>"+"Перша змінна - "+One+", друга змінна - "+Two+".");

 var isAdult = confirm ("Are you adult?");

 var Name = "Ivanka";
 var Surename = "Dubanovska";
 var Group = "Lv-476";
 var YearOfBirth = 1993;
 var MaritalStatus = true;
 var Age = null;
 var ColorOfEyes;
 
 console.log(" Тип змінної YearOfBirth -",typeof YearOfBirth);
 console.log(" Тип змінної MaritalStatus -",typeof MaritalStatus);
 console.log(" Тип змінної Name -",typeof Name);
 console.log(" Тип змінної Surename -",typeof Surename);
 console.log(" Тип змінної Group -",typeof Group);
 console.log(" Тип змінної Age -",typeof Age);
 console.log(" Тип змінної ColorOfEyes -",typeof ColorOfEyes);

var Login = prompt("What is your Login?", "Ivanka123");
alert(Login);

var Email = prompt("What is your email?","ivannavasyliushko@gmail.com");
alert(Email);

var Password = prompt("Pleas enter youre password","******");
alert(Password);

alert("Dear "+Login+", your email is "+Email+", your password is "+Password+".");

    
let Seconds = 60;
let Minutes = 60;
let Hour = Seconds * Minutes;
let Day = 24 * Hour;
var Month = 30 * Day;



var button5 = prompt("<br>"+"<br>"+"If your month have 30 days press - 0, if 31 days press - 1, if your month is february press - 2.", "0");


var res = Number (button5);
  
switch(res){
            
    case 0:  // якщо нажато 0
        document.write("")   ;
        document.write(Month+" seconds in month.")
                
    break;
    
    case 1:    // якщо нажато 1
        Month = 31 * Day;
        document.write(Month+" seconds in month.")

    break;  
    
    case 2:     // якщо нажато 2
        document.write("");
        var Leap = confirm ("Is this leap year");
        if (Leap) {
            Month = 29 * Day;
            document.write(Month+" seconds in month.")
        }else {
            Month = 28 * Day;
            document.write(Month+" seconds in month.")
        }
                    
    break;
    
}  


    


