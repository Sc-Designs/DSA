function findArrayGCD(arr) {
  // Write your logic here
  if(arr.length === 0){
    console.log("Array is Empty.")
    return;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let result = gcd(min,max);
  console.log(result)
}
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
findArrayGCD([])