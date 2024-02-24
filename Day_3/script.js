// print hello 5 times
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')

// but if some buddy say print 100 times so it will takes to much time
// for this we use loop techqniue

for(let i= 1; i <= 5; i++){
    console.log('hello using for :)');
}

let i = 1

while(i <= 5){
    console.log('hello using while :) ');
    i++;
}

// string
let str = "hi"
let str2 = 'hello'
console.log(str)
console.log(str2)
console.log(str.length)
for(let i= 0; i < str.length; i++){
    console.log(str[i]);
}

// template literals
let special = `this is a template literal`;
console.log(special)

// this is used for dynamisum
// lets we want some calcualtion befroe priting then 
// let a = prompt()
// let b = prompt()
// let special2 = `this is a template with dyanmic value ${a + b}`;
// console.log(special2)

// upper, lower, trime

let abc = "            abc";
console.log(abc);
console.log(abc.trim()); // Note the parentheses after trim
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
