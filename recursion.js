// function printFibonacci(n) {
//   if (n <= 0) return process.stdout.write("Invalid Input");

//   const result = [];

//   if (n >= 1) result.push(0);
//   if (n >= 2) result.push(1);

//   function fibo(n, first, second) {
//     if (n == 0) return;
//     let third = first + second;
//     result.push(third);
//     fibo(n - 1, second, third);
//   }

//   fibo(n - 2, 0, 1);

//   process.stdout.write(result.join(" "));
// }

// printFibonacci(4);


function sumOfDigits(n) {
  if (n === 0) return "0";

  let result = "";
  if (n < 0) {
    result += "-";
    n = -n;
  }

  result += reverse(n);
  return result;

  function reverse(n) {
    if (n === 0) return "";
    return `${n % 10}` + reverse(Math.floor(n / 10));
  }
}

let ans = sumOfDigits(-4062133901);
console.log(ans)