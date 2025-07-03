let score = "33abc"
console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //it converts but it is a NaN
console.log(valueInNumber); //NaN

//"33" => 33
//"33abc" => NaN - Not a Number
// true => 1; false => 0 -- viceversa
// "" => false
// "vikas" => true

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 12
let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************* Operations ***********

let value = 4
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = " vikas"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
//use brackets for more efficient values

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3

num1 = num2= num3 = 2+2 // not a good looking code

let gameCounter = 100
gameCounter ++
console.log(gameCounter);

// Prefix: "Change first, then use." 
x = 6
y = ++6
x = 7 , y = 7
// Postfix: "Use first, then change."
x = 4
y = x++
x = 5, y = 4













