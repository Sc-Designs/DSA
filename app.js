let prompt = require("prompt-sync")();
function printInvertedRightTriangle(num, times, letter) {
  if (num >= 1 && num <= 100 && times >= 1 && times <= 100 && letter.length === 1) {
    for (let i = 1; i <= num; i++) {
      for (let k = 1; k <= times; k++) {
        process.stdout.write("  ");
        for (let k = 1; k <= num; k++) {
          if (k === i || k + i === num + 1) process.stdout.write(`${letter}`);
          else process.stdout.write(" ");
        }
      }
      console.log();
    }
  }
}
let num = Number(prompt("How big Size you want : "));
let times = Number(prompt("How many times it repeat: "));
let letter = prompt("Enter a letter: ");
printInvertedRightTriangle(num,times,letter);


// let prompt = require("prompt-sync")();

// let shorterNumber = (num) =>{
//   let number;
//   if (num > 9999 && num < 99999) {
//     number = (num / 1000).toFixed(2);
//     return `=> ${number} Thousand`;
//   } else if (num > 99999 && num < 9999999) {
//     number = (num / 100000).toFixed(2);
//     return `=> ${number} Lakh`;
//   } else if (num > 9999999) {
//     number = (num / 10000000).toFixed(2);
//     return `=> ${number} Corer`;
//   } else {
//     return `=> ${num}`;
//   }
// }

// let Digit = Number(prompt("Enter a number: "));
// let filterNumber =  shorterNumber(Digit);
// console.log(filterNumber);


// function diagonalSum(mat) {
//   // Write your logic here
//   let leftSum = 0, rightSum = 0
//   for(let i = 0; i<mat.length; i++){
//     for(let j=0; j<= mat[i].length ; j++){
//       if (i === j) leftSum += mat[i][j];
//       if(i+j === mat.length - 1) rightSum += mat[i][j]
//     }
//   }
//   if( mat.length % 2 === 1) rightSum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length /2) ]
//   let ans = leftSum + rightSum;
//   console.log("leftSum : " , leftSum)
//   console.log("rightSum : " , rightSum)
//   console.log("Ans : " , ans)
// }
// diagonalSum([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ])

