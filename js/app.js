"use strict";

// let speed = +prompt("Tezlikni kiriting");

// if (speed <= 70) {
//  alert('Hammasi yaxshi')
// }
// else{
//     let point = Math.floor((speed - 70) / 5);
//     if(point>= 120){
//         alert("Prava olindi chunki sizda " + point + "ta point bor")
//     }
//     else{
//         alert(point);
//     }
// }


//============> 1-masala <============
// const optional = [20,50,100];
// let sum = 0;

// for (let i = 0; i < optional.length; i++) {
//   sum += optional[i];
// }


// console.log(`Yig'indisi: ${sum}`);


//==============> 2-masala <==============

// let enterDollar = +prompt("Dollarni kiriting");
// let som = 12500;

// if(enterDollar >= 0){
//     alert(`${enterDollar * som} so'm`);
// }


//============> 3-masala <==============

// let enterNumber = +prompt('Son kiriting');
// let result = enterNumber **2;

// if(result%2==0){
//     alert(`${result} - juft son`)
// }
// else if(result**2%2==1){
//     alert(`${result} - toq son`)
// }
// else{
//     alert('Bu dastur faqat kvadratini hisoblab to yoki jufligini aniqlab beradi')
// }

//============> 4-masala <==============

// let userInput = prompt("Sonni kiriting");
// let number = parseInt(userInput);

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   if (i % 3 === 0) {

//     sum += i;
//   }
// }

// console.log(`Natija: ${sum}`);


//============> 5-masala <==============

// Tushunmadim





// ---------------------> 2- rasm <-------------------

//=============> 1-masala  <==============

// let arr = [1, 55, 63, 12];

// for (let i = 0; i < arr.length; i++) {
//     if (arr.length - 3 % 2 == 0) {
//         alert(`bu son juft son`)
//     } else {
//         alert(`bu son toq son`)
//     }
// }


//=============> 2-masala  <==============

// for (let i=1; i<=50; i++){
//     console.log(i);
// }

//================> 3-masala <=============

// let enterNumber = +prompt('Son kiriting');

// let sum = 0 

// for (let i = 1; i <= enterNumber; i++) {
//   sum+=i

// }

// console.log(`1 dan ${enterNumber} gacha bo'lgan sonlar yig'indisi: ${sum}`);

//================> 4-masala <=============

// let oddSum = 0;
// let evenSum = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {

//     evenSum += i;
//   } else {

//     oddSum += i;
//   }
// }
// let timesGreater = oddSum / evenSum;
// console.log(` ${timesGreater} marta katta.`);

//================> 5-masala <=============

// let enterNum = +prompt("Son kiriting");

// let n = parseInt(enterNum);

// for (let i = 1; i <= n; i++) {
//     if (n % 2 == 0 && n % 3 == 0) {
//         console.log(`${n} - bu son 2 ga ham 3 ga ham bo'linadi`);
//     }else{
//         console.log(`${n} - bu son 2 ga ham 3 ga ham bo'linmaydi`);
//     }
// }

//================> 6-masala <=============

// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');

// for ( let i = a; i <= b; i++) {
//  console.log(i);
// }

//================> 7-masala <=============

// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');

// for ( let i = a; i <= b; i++) {
//    if (i % 3 == 0 && i%5==0){
//     console.log(`${i} - bu son 3 ga ham 5 ga ham bo'linadi`);
//    }
//    else{
//     console.log(`${i} - bu son 3 ga ham 5 ga ham bo'linmaydi`);
//    }
// }

//================> 8-masala <=============

// let inputA = +prompt("Iltimos, bir sonni kiriting:");

// let a = parseInt(inputA);

// for (let i = 1; i <= a; i++) {

//   if (a % i === 0) {

//     console.log(i);
//   }
// }

//================> 9-masala <=============


// let input = prompt("Iltimos, ikki xonali son kiriting:");

// let number = parseInt(input);

// let tens = Math.floor(number / 10);

// let units = number % 10;
// console.log("Onliklar xonasidagi son:", tens);
// console.log("Birliklar xonasidagi son:", units);


//================> 10-masala <===============

// let input = prompt("Iltimos, ikki xonali son kiriting:");

// let number = parseInt(input);

// let tens = Math.floor(number / 10);

// let units = number % 10;

// let add = units+tens;
// let result = add-tens;

// console.log(result);



//================> 11-masala <================

// let arr = [true,undefined,25,null];

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] == "boolean"){
//     console.log(arr[i]);
//     }   
// }

//================> 12-masala <================

// let arr = [44,33,22,3,2,1,55,6];
// let result = arr.reverse();

// console.log(result);

//================> 13-masala <================

// let arr = [44, 33, 22, 3, 2, 1, 55, 6];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);  
// }

//================> 14-masala <================
// let arr = [4, 2, 4, true, false, null];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//    sum+=arr[i];
//    console.log(sum);
// }

//================> 15-masala <================

// let arr = [-5, 2, - 4, 99, 21, 2, -9, -52];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < 0) {

//         sum += arr[i];
//     }
// }


// console.log(`Manfiy sonlarning yig'indisi: ${sum}`);

//================> 16-masala <================


// let arr = [-5, 2 - 4, 99, 21, 2, -9, -52];


// let negativeCount = 0;
// let positiveCount = 0;


// for (let i = 0; i < arr.length; i++) {

//   if (arr[i] < 0) {

//     negativeCount++;
//   } else if (arr[i] > 0) {

//     positiveCount++;
//   }
// }


// console.log("Manfiy sonlar soni:", negativeCount);
// console.log("Musbat sonlar soni:", positiveCount);

//================> 17-masala <================

// for (let i = 20; i >= 1; i--) {
//     console.log(i);
//   }

//================> 18-masala <================

// let arr = ["Komiljon", "Yusufbek", "Islomjon", "Akbar"];


// let enteredName = prompt("Iltimos, bir ism kiriting:");


// if (arr.includes(enteredName)) {

//   alert("Bunday ism mavjud");
// } else {

//   alert("Bunday ism mavjud emas");
// }

