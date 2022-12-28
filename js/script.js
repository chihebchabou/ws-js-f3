console.log('Hello F3');

// Declaration of variables
var fullName = 'John Doe';
var age = 14;
var isAlive = true;
var x;
var y = undefined;
var z = null;

console.log(fullName);
console.log(age);
console.log(isAlive);

console.log('type of fullName is ' + typeof fullName);
console.log('type of age is ' + typeof age);
console.log('type of isAlive is ' + typeof isAlive);
console.log('type of x is ' + typeof x);
console.log('type of y is ' + typeof y);
console.log('type of z is ' + typeof z);

// Object literla
var person = {
  fullName: 'John Doe',
  age: 25,
  profession: 'Web Developer',
  isAlive: true,
};

console.log(person);

// Dot notation
var res = person.fullName;
console.log(res);

// Set fullname to Jane Doe
person.fullName = 'Jane Doe';

// Add new property of phone
person.phone = '555-555-5555';

console.log(person);

// Bracket notation
var res2 = person['fullName'];
console.log(res2);

// Set phone number to 444-444-4444
person['phone'] = '444-444-4444';
console.log(person);

// for in
for (var key in person) {
  console.log(key + ': ' + person[key]);
}

// Array
var cars = ['Saab', 'BMW', 'Mercedes'];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log('----------------');
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log('----------------');
// for of
for (var car of cars) {
  console.log(car);
}

cars[2] = 'Opel';
cars[4] = 'Mercedes';
console.log(cars);

for (var car of cars) {
  console.log(typeof car);
}

// while loop
var index = 20;
while (index < 10) {
  console.log(index);
  index++;
}

// do while
do {
  console.log(index);
  index++;
} while (index < 10);

// if statement
if (age < 10) {
  console.log('child');
} else if (age < 18) {
  console.log('teenager');
} else {
  console.log('adult');
}

// switch case
var date = new Date();
console.log(date.getDay());
var dayNumber = date.getDay();

switch (dayNumber) {
  case 0:
    console.log('sunday');
    break;

  case 1:
    console.log('monday');
    break;

  case 2:
    console.log('tuesday');
    break;

  case 3:
    console.log('wednesday');
    break;

  case 4:
    console.log('thursday');
    break;

  case 5:
    console.log('friday');
    break;

  default:
    console.log('saturday');
    break;
}

// Function
function greeting(name) {
  console.log('Hello ' + name);
  // return 'Hello ' + name;
}

var result = greeting('John');
console.log(result);
