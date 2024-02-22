// variables in JS
// 1) variable names are cas sensitve; 'a' and 'A' is different.
// 2) only letters, digis, underscore(_) and $ is allowed. (not even space)
// 3) only a letter, underscore(_) or $ should be 1st charcter.
// 4) Resrved Words cannot be variable names.
name = "Tony Stark";
console.log(name)
Name = 'Tanmay Bhat'
console.log(Name)
age  = 24;
console.log(name)
x = null;
y = undefined;
isFollow = true;
isYes = false;
console.log("age is :" ,age);
console.log(x);
console.log(y);
console.log(isFollow)
console.log(isYes)

// variables always defined with eaither Let, const or var.
// var : Variable can be re-declared & updated. a global scope variable.
// let : variable cannot be re-declared but can be updated. a block scope variable.
// const: variable cannot be re-declared or updated. A block scope variable.

var fullName = "Tony Stark"
var age = 24
var totalPrice = 1000;

console.log(fullName)

// til 2015 we use var but after that we use only either let or const
// var can be re-declared and re-update also 
//  lets is can change tony stark name 
var fullName = "Ranveer sigh"
console.log(fullName)
// this may cause confussion in code.

let actorAge = 59
console.log(actorAge)

// let actorAge = 80  error cannot create double but we can update
actorAge = 24

console.log(actorAge)

// const is used to defined constant value such as pi value light speed etc can be consider as constant
const pi = 3.14

console.log(pi)