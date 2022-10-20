// join
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.join());
// console.log(fruits.join('--'));

// // push
// fruits.push('Kiwi'); // push a string on an array
// console.log(fruits.join());
// fruits.push(['Strawberry', 'Blueberry']) // push an array on an array
// console.log(fruits.join());
// fruits.push(5);
// console.log(fruits.join());
// console.log(JSON.stringify(fruits));

// // pop
// // removes the last element and returns it
// console.log(fruits.pop()); //poped the array of
// console.log(fruits.join());

// shift
// removes the first element and returns it
// console.log(fruits.join());
// console.log(fruits.shift());
// console.log(fruits.join());

// // unshift
// // adds to the start of the array
// console.log(fruits.unshift('Fred'));
// console.log(fruits.join());

// // concat
// fruits = fruits.concat(['Strawberry', 'Blueberry']);
// console.log(JSON.stringify(fruits));

//slice
// grabs and returns the element
fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(3);
// console.log(citrus);
// console.log(fruits);

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits);


// splice
// .splice(where, what to remove, what to add)
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", 'Pineapple', 'Cherry'];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);