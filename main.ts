//Pg : 121
let a : number = 5 ;
let b : number = 2 ; 
let c : number = ++a + a++ + --b + b-- + a + b++ +b ;
console.log(c); // 6 + 7   + 1   + 0   + 5 + 1   +2 = 22 
//Pg : 131
// Addition
let num1 = 23 ;
let num2 = 76 ;
let result = (num1 + num2);
console.log(result); // Answer = 99
// Subtraction
let sum1 = 68 ;
let sum2 = 84 ;
let result1 = (sum2 - sum1);
console.log(result1); // Answer = 16
// Multiplication
let d = 5 ;
let e = 7 ;
let result2 = (d * e);
console.log(result2); // Answer = 35
// Division
let f = 6 ;
let g = 3 ;
console.log(f / g); // Answer = 2
// Exponentiation
let h = 5 ;
let result3 = (h ** h);
console.log(result3); // Answer = 3125
// Modulus
let n1 = 20;
let n2 = 10;
console.log(n1 % n2); // Answer = 0
//BMI Calculator
let heightInMeters = 4.6 ;
let weightInKg = 40 ;
let BMI = weightInKg / (heightInMeters * heightInMeters);
console.log(`Your BMI is ${BMI}`);