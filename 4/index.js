
//TASK1!!!

let mentor = {
    course:"JS fundamental",
    duration:3,
    direction:"web-development"
};

let employee1 = {
    name1: "Andre",
    sure1: "Anderson",
    sal: 250,
    age1:34,
    fullName: function(){
        return this.name1 + " " + this.sure1;
    }
}

 function propsCount( currentObject){
    var counter = 0;
    for (var key in currentObject) {
      counter++;
    }
    return counter;
 }
var res = propsCount(mentor);
console.log("In this object are : "+ res + " properties.");
res = propsCount(employee1);
console.log("In this object are : "+ res + " properties.");
 
//TASK2!!!

let internetClient = {
    name:"Ivanka",
    surename:"Vas",
    age:18,
    type:1,
    work:"make up artist"
}

function showProps (currentObject){
    var propsArray = new Array ();
    var valueArray = new Array ();
    let i = 0;
    for (var key in currentObject) {
         propsArray[i] = key;//список властивостей записати в масив
         valueArray[i] = currentObject[key];// список значень записати в масив
        i++;
    }
    console.log(propsArray);
    console.log(valueArray);
}
showProps(internetClient);

//TASK3!!!

class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName,
        this.dayRate = dayRate,
        this.workingDays = workingDays
    }
    showSalary(){
        var res = this.dayRate * this.workingDays;//зарплата працівника
        return console.log(this.fullName +" salary: " + res );
    }

    #experience = 1.2;

    showSalaryWithExperience(){
        var res1 = this.dayRate * this.workingDays * this.#experience; //зарплата працівника із урахуванням досвіду
        return res1;
    }
    
    get showExp() {
        return this.#experience;
    }
    set setExp(experience) {
        this.#experience = experience;
    }
  
}

let worker1 = new Worker("John Johnson ", 20, 23);
document.write("</br>");
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("Experience: " + worker1.showExp);
console.log(worker1.fullName +" salary: " + worker1.showSalaryWithExperience());
worker1.setExp= 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName +" salary: " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
document.write("</br>");
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("Experience: " + worker2.showExp);
console.log(worker2.fullName +" salary: " + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName +" salary: " + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
document.write("</br>");
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("Experience: " + worker3.showExp);
console.log(worker3.fullName +" salary: " + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName +" salary: " + worker3.showSalaryWithExperience());

const salaryArray = [ worker1, worker2, worker3 ];
function sortArray ( salAr){
    salAr.sort(function(a, b)  {
      return  a.showSalaryWithExperience() - b.showSalaryWithExperience();
    })
}
sortArray(salaryArray);

function showSortArray (salaryArray ){
    for (let i  = 0; i <= 2; i++){
        console.log(salaryArray[i].fullName + ": " + salaryArray[i].showSalaryWithExperience());
    }
}
showSortArray(salaryArray);


//TASK4!!!

class Person {
    constructor(name, surename){
        this.name = name,
        this.surename = surename
    }
    showFullName(){
        console.log (this.name + this.surename);
    }

}
class Student extends Person {
    constructor(name,surename,year){
      super (name ,surename);  
      this.year  = year;
    }
   
    showFullName(midleName){
        return (this.name + " " + this.surename + " " + midleName);
    }
    
    showCourse(){
    var yearNow = new Date().getFullYear() ;
    var res2 = yearNow - this.year;
    return res2;
    }
}
var stud1 = new Student("Petro", "Petrenko", 2016);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

//TASK5!!!

class GeometricFigure {
    constructor(){

    }
    getArea(){
      return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle  extends GeometricFigure {
    constructor(b,h){
        super();
        this.b = b;
        this.h = h;
    }
    getArea(){
        var res = (this.b * this.h)/2;
        return res;
    }

}

class Square extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        var res = this.a * this.a;
        return res;
    }
}

class Circle extends GeometricFigure {
    constructor(r){
        super();
        this.r = r;
    }
    getArea(){
        var res =  3.14 * Math.pow(this.r,2);
        return res;
    }

}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures (figures){
    var sum = 0;
        
        for ( let i  = 0 ; i < 3; i++ ){
            if (figures[i] instanceof GeometricFigure) {
            console.log("Geometric figure: " + figures[i].toString() + " - area: " +  figures[i].getArea());
            sum += figures[i].getArea();
        }
    }
    return  sum;
}
console.log("Total area: " + handleFigures(figures));
