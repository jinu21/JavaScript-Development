// console.log("Day 2")
// this is a comments
// opeerators
// 1) arithmatic operators +, -, *, /, %, **, ++ , -- 
let a = 5;
let b = 2;
console.log(a+b)
console.log(a*b)
console.log(a-b)
console.log(a/b)
console.log(a%b) // gives remainder
console.log(a**b) // power 
console.log(a++) // unary operator post incement 
console.log(a--) // unary operator post decrement
console.log(++a) // unary operator pre incrment
console.log(--a) // unary operator pre decrement


// Assignment Opertors =, +=, -=, *=, %=, **=
console.log(a+=4) // unary operator post incement 
console.log(a-=4)

// comparison Opertors ==, ===, !=, !==, >, >= , <, <=
console.log(a==b)
console.log(a==b) // compairs data and data type.
console.log(a!=b)
console.log(a!==b) // compairs data and data types.

console.log(a<b)
console.log(a<=b) 
console.log(a>b)
console.log(a>=b)

// logical operators 
// compare both side of compparion opertor give true or false
// &&, ||, !
console.log(a<=b && a!=b)
console.log(a<=b || a!=b)
console.log(!a<=b) 

// Ternary Operators
// condition?true ouput: false ouput
let age = 18
console.log(age > 18 ? "adult":"not adult")

// if else
if(age < 18){
    console.log('no')
}
else{
    console.log('Yes')
}

// if else if else

if(age < 18){
    console.log('no')
}
else if(age = 18){
    console.log('nice')
}
else{
    console.log('Yes')
}


// taking input from prompt
let Fname = prompt("Enter your name : ")
console.log(Fname)


