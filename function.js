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

const checkNumber = (num) => {
    let result;
    if (num > 0) {
       result="positive";
    }else if(num<0) {
        result=  "negative";
    }else{
        result= "zero";
    }
    return result;

}
const result = checkNumber(-1);
console.log(result)


//WAF to calculate the sum of two numbers
// const sum = (x, y) => {
//     return x + y;
// }
// const result1 = sum(2, 3);
// console.log(result1);