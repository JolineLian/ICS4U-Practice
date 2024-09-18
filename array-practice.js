// task 1
let fruits = ['apple', 'orange', 'banana'];
fruits.push('grape');
fruits.push('mango');
console.log('fruits');

let numbers = [5, 10, 15];
numbers.unshift('0');
numbers.unshift('1');
console.log('numbers');

// task 2
let animals = ['dog', 'cat', 'elephant', 'lion'];
animals.pop();
console.log(animals);

let colours = ['red', 'blue', 'green', 'yellow'];
colours.shift();
console.log(colours);

// task 3
let cars = ['Toyota', 'Honda', 'Tesla', 'Ford'];
console.log(cars.indexOf('Tesla'));

let drinks = ['water', 'juice', 'sode', 'milk'];
console.log(drinks.includes('coffee'));

// task 4
let ages = [21, 45, 18, 35, 25];
console.log(ages.sort());

let letters = ['a', 'b', 'c', 'd'];
console.log(letters.reverse());

// task 5
let months = ['January', 'February', 'March', 'April', 'May', 'June'];
let newMonths = months.splice(2,3);
console.log(newMonths);

let cities = ['New York', 'Los Angles', 'Chicago', 'Houston', 'Phoenix'];
cities.splice(2,2);
console.log(cities);

// task 6
let hobbies = ['reading', 'swimming', 'gaming', 'traveling'];
console.log(hobbies.toString());

let group1 = [1, 2, 3];
let group2 = [4, 5, 6];
console.log(group1.concat(group2));