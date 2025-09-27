// 1) Accessing Array Elements

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);

// 2) Changing an Array Element
const cars1 = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);

// 3) Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// to display an array in string format
let myList = fruits.toString();
console.log(myList);

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:
const person = ["John", "Doe", 46];
console.log(person);
console.log(person.toString());

// Looping Array Elements
const fruitsbucket = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);

//Adding Array Elements
const fruitsList = ["Banana", "Orange", "Apple"];
fruitsList.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruitsList);

const fruitItems = ["Banana", "Orange", "Apple"];
fruitItems[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruitItems);

//Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
console.log(myObj);
