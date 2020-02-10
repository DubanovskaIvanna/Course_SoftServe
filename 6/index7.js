//TASK7!!!

let newMainClass = document.createElement("mainclass");
newMainClass.className = "mainClass check item";
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
let newP = document.createElement("p");
newP.innerHTML = "First paragraph";
script.prepend(newMainClass);
newMainClass.prepend(newDiv);
newDiv.prepend(newP);