//TASK1!!!
function upperCase (str){
    let regExp  = /^[A-Z]/;
    let res = regExp.test(str);
        if (res){
            return console.log("String's starts with uppercase character ");
        }else {
            console.log("String's  not starts with uppercase character");
        }
}
upperCase('regexp');
upperCase('RegExp');

//TASK2!!!

function checkEmail (str){
    let regEx = /([@]\w{2,10}[.])/;
    let res = regEx.test(str);
    if (res){
        return console.log(res);
    }else {
       return console.log(res);
    }
}
checkEmail("Qmail@gmail.com");

//TASK3!!!
var str = "cdbBdbsbz";
console.log(str.match(/[d]([b]+)([d])/i)); 


//TASK4!!!
var str1 = `Java Script`; 
str1 = str1.replace('Script','Java');
console.log( str1.replace(/Java/,'Script,'));


//TASK5!!!
function validationOfCarв (str){
    let regExp  = /^(\d{4}\W){3}\d{4}/;
    let res = regExp.test(str);
        if (res){
            return console.log("Your card is valid ");
        }else {
            console.log("Your card isn't valid, please check information which you had entered.");
        }
}

validationOfCarв("9999-9999-9999-9999");

//TASK6!!!
function checkFullEmail (str){
    
    let regExp = /^([A-Za-z0-9]+\w*[\-]?\w*[@]\w{2,10}[.][A-Za-z0-9]+)$/;
    let res = regExp.test(str);
        if (res){
            return console.log("Email is correct!");
        }else {
            console.log("Email is not correct!");
        }
}
checkFullEmail("my_mail123@gmail.com");
checkFullEmail("_my_mail@gmail.com");

//TASK7!!!
function checkLogin (str){
    let regExp = /^([A-Za-z]+[A-Za-z0-9]+){2,10}/;
    let res = regExp.test(str);
        console.log(res);
        console.log(str.match(/(\d\.\d)|\d+/g));
    
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
