// function hello(){
//     console.log('Hello World');
// }

// ************************

// function sum(a,b){
//     console.log(a+b);
// }

// sum(12,3)

// ************************

// function sum(a,b){
//     return (a+b);
// }

// sum(12,3) //sonucu göremedik return ü yakala

// let toplam = sum(12,3)
// console.log('Result: ', toplam);
// console.log(sum(12,3)+5);

// ************************

// function sum(){
//     // return ('hallo');
//     console.log('hallo');
// }
// console.log(typeof sum());

// ************************

// function addTwo(number){
//     return +number + 2  // number in önündeki '+' ile gelen stringi number yapiyoruz
//    // Number(number)  type conversion
// }

// console.log(addTwo('6'));

// ************************

// function hallo (name = 'New User'){
//     console.log(`Hallo ${name}`);
// }

// hallo('Victor')
// hallo('Valery')
// hallo()

// ************************

// function sayHi(myName){
//     console.log(`Hallo ${myName}`);
//     myName = 'Ed'
//     console.log(`Hallo ${myName}`);
// }

// let myName = 'Mark';
// sayHi(myName)
// console.log('Outside function', myName);

// ************************

// let student = {};
// student.name = 'Mark'

// function sayHi2(student){
//     console.log(`Hello ${student.name} entry point`);
//     student.name = 'John';
//     console.log(`Hello ${student.name} first point`);
//     student = {name : 'Leon'};
//     console.log(`Hello ${student.name} inside function`);
// }

// sayHi2(student)
// console.log(`Hello! ${student.name} from outside`);

// ************************

// function div(num1, num2) {
//     // console.log(num1/num2);
//     if (num2 === 0) {
//         console.log("Zero Division Error");
//     } else {
//         console.log(num1 / num2);
//     }
// }

// div(12, 4)
// ------------------

// function div2(num1,num2){
//     return num2 ? num1 / num2 : 'Zero Division Error'
//     //      'num2' nin true yada false oldugu sorgulanir. true ise num1/num2 islemi yapilir, false ise  'Zero Division Error' yazar
// }

// console.log(div2(18,0));

// ************************

// function sum(a, b, ...args) {
//     // console.log(arguments);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ************************

// function sum2(a,b, ...args){
//     console.log(args);
//     console.log(arguments);
//     return a + b
// }

// console.log(sum2(1,2,3,4,5));

// ************************

// function sayHi1(){
//     return 'Hello from sayhi1'
// }
// console.log(sayHi1());

// const sayHi2 = function greet(){
//     return 'Hello from sayhi2'
// }

// console.log(sayHi2());

// ************************

// const pascalNumber = function (n){
//     return (n*(n+1)/2)
// }
   
// console.log(pascalNumber(4));

// ************************

// const pascalNumber = function total (n){
//     if(n===1) return 1;
//     return n + total(n-1)
// }
   
// console.log(pascalNumber(3));

// ************************

//Immediaetly invoked function expression

// let result = (function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(3);
// console.log(result);










