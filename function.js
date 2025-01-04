//function
//DRY = do not repeat yourself
//? code reuse
//? single point of control
//syntax
//function functionName(){
//    code to be executed
//}
// we need to call the function
// function greet() {
//     console.log('Hello World');
// }
// greet();

// function getSum (x,y) {
//     console.log(x + y);
// }
//get sum (2, 3)
// getSum(2, 3);

// // //?WAF which determines provided number is even or odd
//  function evenOdd(x) {
//     if (x % 2 === 0) {
//         console.log('The number is even');
//     } else {
//         console.log('The number is odd');
//     }
// }
// evenOdd(100);


//WAF to calculate product of two number
// function product(x, y) {
//     console.log(x * y);
// }
// product(3, 4);

// function getproduct(num1 , num2){
//     let product = num1 * num2;
//     return product;

// }
// const result = getproduct(3, 4);
// console.log(result);

//WAF to calculate factorial of a number
// function factorial(n) {
//     let result = 1;  // 1
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//         return result;   
// }
// const result = factorial(5);
// console.log(result);

//?arrow function

//syntax
//const functionName = () => { 
// somecode};
// const greet = (username) => {    
//     console.log("hello sujan ben" + " " + username);
// };
// greet("sujan");

// let firtname ="sujan";
// let lastname = "ben";
// let fullname = firtname +" " + lastname;
// console.log(fullname);

//string template
// let fullname1 = `${firtname} ${lastname}`;
// console.log(fullname1);

// write an arrow function which calculate whether a number is positive or negative

// const checkNumber = (num) => {
//     if (num > 0) {
//        return"positive";
//     }else if(num<0) {
//         return "negative";
//     }else{
//         return "zero";
//     }

// }
// const result = checkNumber(-1);
// console.log(result);

// const checkNumber = (num) => {
//     let result;
//     if (num > 0) {
//        result="positive";
//     }else if(num<0) {
//         result=  "negative";
//     }else{
//         result= "zero";
//     }
//     return result;

// }
// const result = checkNumber(-1);
// console.log(result)


//WAF to calculate the sum of two numbers
// const sum = (x, y) => {
//     return x + y;
// }
// const result1 = sum(2, 3);
// console.log(result1);


//write a function that takes 5 numbber and calculate thea average of those number

// const average = (a, b, c, d, e) => {
//     return (a + b + c + d + e) / 5;
// };
// console.log(average(2, 3, 4, 5, 6));

// const average =(q, b, c, d,e) => {
//     let sum = q + b + c + d + e;
//     let avg =sum/5;
//     return avg;
// };
// const average = average(2, 3, 4, 5, 6);
// console.log(average)



//waf the calculate the factorial of a number
// const factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// };

//WAF calclate the given number into prime
// const isPrime = (n) => {
//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };

// const result = isPrime(7);
// console.log(result);

//WAF which convert rupee to paisa
// const convertrupeeTOpaisa = (rupee) => {
//     return rupee * 100;
// };
// console.log(convertrupeeTOpaisa(1));

// const convertrupeeTOpaisa = (rupee) => {
//     let paisa =rupee * 100;
//     return paisa;
// }
// const paisa = convertrupeeTOpaisa(1);
// console.log(paisa(1));

// const convertRSToPaisa=(rs) =>{
//     let paisa = rs * 100;
//     return paisa;
// };
// const paisa = convertRSToPaisa(1);
// console.log(paisa);

//waf fherniate to celcius
// const convertFahrenheitToCelsius = (fahrenheit) => {
//     return (fahrenheit - 32) * 5 / 9;
// };
// console.log(convertFahrenheitToCelsius(32));

//WAF that convert dollor yp cents
// const convertDollarToCents = (dollar) => {
//     return dollar * 100;
// };
// console.log(convertDollarToCents(10));


//WAF which convert hours to seconds
// const convertHoursToSeconds = (hours) => {
//     return hours * 3600;
// };
// console.log(convertHoursToSeconds(1));


//WAF which check whether a number is prime or not
// const isPrime =(n) =>{
//     if (n===1){
//         return false;
//     }else if(n===2){
//         return true;}
// };

//waf which print largest of two number
// const largestoftwonumber = (a ,b)=>{
//     if (a > b){
//         return a;
//     }else{
//         return b;
//     }
// };
// console.log(largestoftwonumber(2, 3));
