//Pg : 121
var a = 5;
var b = 2;
var c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c); // 6 + 7   + 1   + 0   + 5 + 1  + 1 = 21
//Pg : 131
// Addition
var num1 = 23;
var num2 = 76;
var result = (num1 + num2);
console.log(result); // Answer = 99
// Subtraction
var sum1 = 68;
var sum2 = 84;
var result1 = (sum2 - sum1);
console.log(result1); // Answer = 16
// Multiplication
var d = 5;
var e = 7;
var result2 = (d * e);
console.log(result2); // Answer = 35
// Division
var f = 6;
var g = 3;
console.log(f / g); // Answer = 2
// Exponentiation
var h = 5;
var result3 = (Math.pow(h, h));
console.log(result3); // Answer = 3125
// Modulus
var n1 = 20;
var n2 = 10;
console.log(n1 % n2); // Answer = 0
//BMI Calculator
var heightInMeters = 4.6;
var weightInKg = 40;
var BMI = weightInKg / (heightInMeters * heightInMeters);
console.log("Your BMI is ".concat(BMI));
