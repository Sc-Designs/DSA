function mySqrt(n) {
    function helper(x) {
      if (x * x > n) return Math.floor(x - 1);
      return helper(x + 1);
    }

    if (n < 2) return n;
    return helper(1);
}
console.log(mySqrt(8))




function primeFinder(n){
  if (n <= 2) return 0;
  let count = 0;
  let isPrime = new Array(n+1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i] == true) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (isPrime[i] == true) {
      process.stdout.write(`${i} `);
      count++;
    }
  }
  console.log(String(count));
}

primeFinder(12)

let val = 12;
let sum = 0;
while(val > 0){
  let rem = val%10;
  sum = sum + rem
  val = val/10
}
console.log(sum)

function myPow(num, pow){
    if(pow === 0) return 1.0;
    let ans = pow < 0 ? 1/temp(num, -pow) : temp(num, pow);
    console.log(ans)
}

function temp(num, pow){
  if(pow === 0) return 1;
  let half = temp(num, parseInt(pow/2))
  if(pow % 2 === 0) return half*half; 
  return half*half*num;

}
myPow(4,9)


function firstMissingPositive(arr) {
  // Write your code here
  let i = 0;
  while (i < arr.length) {
    let currectIndex = arr[i]-1;
    if (arr[i] > 0 && arr[i] <= arr.length && arr[i] != arr[currectIndex]) {
      let temp = arr[i];
      arr[i] = arr[currectIndex];
      arr[currectIndex] = temp;
    } else i++;
  }
  for (let j = 0; j < arr.length; j++) {
    if (j+1 != arr[j]) return j+1;
  }
  return arr.length+1;
}


console.log(firstMissingPositive([1,2,3,4,5]))

let findFirstNumber = (arr)=>{
  let n = arr.length;
  for (let i = 0; i < n; ) {
    let correctIndex = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
console.log(findFirstNumber([0, -1, -2, -3, 4]));

function bst (nums, target, isStart ){
  let f = 0, l = nums.length-1 , ans = -1;
  while(f<=l){
    let m = Math.floor((f+l)/2);
    if(nums[m] == target){
      ans = m;
      if(isStart) l = m-1;
      else f = m+1;
    } 
    else if(nums[m] < target) f = m+1;
    else l = m-1;
  }
  return ans;
}
function searchRange(nums, target) {
  // Write your code here
  let s = bst(nums,target, true);
  let e = bst(nums,target,false);
  return [s,e];
}

console.log(searchRange([1, 2, 4, 4, 6, 7], 4));

function study (arr,target){
  let f = 0, l = arr.length-1;
  while(f<=l){
    let mid = Math.floor((f+l)/2);
    if(arr[mid] == target) return  mid;
    if (arr[f] <= arr[mid]) {
      if (arr[f] <= target && target < arr[mid]) {
        l = mid - 1;
      } else {
        f = mid + 1;
      }
    }
    else {
      if (arr[mid] < target && target <= arr[l]) {
        f = mid + 1;
      } else {
        l = mid - 1;
      }
    }
  }
  return -1;
}
console.log(study([4,5,6,7,0,1,2],0))