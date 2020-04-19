console.log('hello');

// alert('hello this is Qazi');

// How to write a comment inline

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript*/

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++;
console.log(num1);

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 5);

console.log(num1 / 6);

// Increment/decrement by 10 (or any number you want)
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
   // alert('This is a function');
   console.log('this is a function');
}

// Call
fun();

/* Let's create a function that takes in a name
and says hello followed by your name

For example

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting() {
    // var name = prompt('What is your name?');
    // var result = 'Hello ' + name;
    var result = 'Hello' + ' ' + name; // String Concatenation
    console.log(result);
}

// greeting();  - commented out so the prompt won't run

// How do arguments work in fuctions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    // console.log(num1 + num2);
    console.log(result);
}

// sumNumbers(10, 10); -- commentted out to not run
// Could put words in there instead
// Ex: sumNumbers('Hello', ' Qazi');

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

// var name = prompt('What is your name?');
// commented out so the prompt won't run
greeting(name);

/* While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}
// Prints out to 100
*/


// For loops
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
/* num <= 100 --- prints to 100, if you only use
< it stops at 99
*/

// Data Types
let yourAge = 18; // number
let yourName = 'Bob'; // string
let nameA = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in JavaScript (common methods)
// let fruit = 'banana';
let fruit = 'banana,apple,orange,blackberry'
let moreFruits = 'banana\napple';   // new line

console.log(fruit.length); // counts number of letters in 'banana' - answer is 6
console.log(fruit.indexOf('an'));  // answer is 1
console.log(fruit.indexOf('nan')); // answer is 2
console.log(fruit.slice(2, 4));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase('')); // makes string uppercase
console.log(fruit.toLowerCase('')); // makes string lowercase
console.log(fruit.charAt(2)); // gives you character at index number 2 = n
console.log(fruit[2]); // does same thing as charAt
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by characters


// Array (data type)
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');
// alert(fruits[1]);
console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear'; // change value - replaces banana with pear in array
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} // lists out all fruits in array 1 item at a time

// array common methods
console.log('toString', fruits.toString());
console.log(fruits.join('-')); // joins array by hyphens
console.log(fruits, fruits.pop(), fruits); // removes last item from an array
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // removes first item from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first item to an array
console.log(fruits);
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort());

console.log(allGroceries.sort());

console.log(someNumbers.sort(function(a, b) {return a-b}));
console.log(someNumbers.sort(function(a, b) {return b-a}));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// dictionaries in Python

let student = {first: 'Rafeh', last:'Qazi'};
console.log(student.first);
console.log(student[first]);
