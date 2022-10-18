/*
var greeting = 'Hello';
//function test() {
    if (true) {
        var greeting = 'Hi';
    }
//}
*/

// let is very similar to how Java works (obeys scope and cannot redclare)
/*
let greeting = 'Hello';
function test() {
    if (true) {
        let greeting = 'Hi';
    }
}
console.log(greeting);

const TEST_VALUE = 6;
TEST_VALUE = 5;
*/

// == vs ===

// console.log(1 == '1'); //true
// console.log(1 === '1'); //false
// console.log(1 == true); //true
// console.log(1 === true); //false
// console.log(typeof (1));
// console.log(typeof (true));

// !== compares values and types to ensure that they are not the same

// let number1 = 6;
// let number2 = 7;
// let sum = number1 + number2;

// const result = number1 + " + " + number2 + " = " + sum;
// console.log(result);

// const result2 = `${number1} + ${number2} = ${sum}`;
// console.log(result2);

//functions (assign functions)

// function addTwo(x){
//     return x + 2;
// }

// console.log(addTwo(5));

// function add(x, y, z){

//     return x + y + (typeof(z) === 'undefined' ? 0 : z);
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));


let num = 7;
// ternary operator
// condition ? true : false
console.log(num%2==0?'even':'odd');

// for loop

for (let index = 0; index < 7; index++) {
    console.log(index);
    
}

const colours = ['red', 'yello', 'green', 'blue'];
for (const colour of colours) {
   console.log(colour); 
}

//for in iterates over property names
const car = {make: 'Ford', model: 'Mustang'};
for (const val in car) {
    console.log(`${val}: ${car[val]}`);
}

console.log(car.make);
console.log(car['make']);