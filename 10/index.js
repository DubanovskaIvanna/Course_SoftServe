//TASK1!!!
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y,r,...z]  = arr;//spret
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//TASK2!!!

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
let [name1,name2,name6,name4] = data.names;
let [age1,age2,age3,age4] = data.ages;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
 
 //TASK3!!!

let mul = (arg1,...rest)=>{
    let argArray = [arg1,...rest];
    let mult = 1;
    let count = 0;
    for ( let i = 0; i< argArray.length;i++){
        if (typeof(argArray[i]) == "number"){
            mult = mult * argArray[i] ;
        }else {
            count ++;
            if (count == argArray.length)
            return 0;
        }
    }return mult;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//TASK4!!!

let server = {
   data: 0,
   convertToString: function (callback) {
      callback( () => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return callback => {
         this.result = callback();
      };
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

 
 //TASK5!!!

 function mapBuilder (keysArray, valuesArrays){
     let newMap =  new Map ;
     for (let i = 0;i<keysArray.length; i++){
      newMap.set(keysArray[i],valuesArrays[i]);
     }     
     return newMap;
 }
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
