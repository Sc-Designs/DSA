let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter the size of array : "));
// if(size <= 1) console.log("array size must be more than 2.")
//     else{
// let arr = new Array(size);
// for (let i = 0; i < size; i++){
//     let value = Number(prompt(`Enter the element of array ${i+1} : `));
//     arr[i] = value;
// }
// console.log("array ", arr)
// let arr1 = [...arr];
// let arr2 = [...arr];
// let arr3 = [...arr];
// // Bubble Sort
// for ( let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr1.length - i - 1; j++){
//     if(arr1[j] > arr1[j+1]){
//         let temp = arr1[j];
//         arr1[j] = arr1[j+1];
//         arr1[j+1] = temp;
//     }
//     }
// }
// console.log("Bubble Sort ", arr1)


// Insertion Sort 
for (let i = 0; i < arr2.length; i++){
        let samllest = i;
        for(let j = i+1; j< arr2.length; j++){
                if(arr2[samllest] > arr2[j]){
                        samllest = j;
                    }
                }
                if ( i != samllest ){
                        let temp = arr2[i];
                        arr2[i] = arr2[samllest];
                        arr2[samllest] = temp;
                    }
                }
console.log("Insertion Sort ", arr2)

// // Selection Sort
// for(let i = 1; i < arr3.length; i++){
//     let small = arr3[i];
//     let j = i-1;
//     while(j>=0 && arr3[j] > small){
//         arr3[j+1] = arr3[j];
//         j--;
//     }
//     arr3[j+1] = small;
// }
// console.log("Selection Sort ", arr3);
// }


// [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4] 
// remove all the zero's and place the number instead their and sort them.

// function duplicateZeros(arr) {
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) count++;
//     }
  
//     let i = arr.length - 1;
//     let j = arr.length - 1 + count;
  
//     while (i < j) {
//       if (j < arr.length) {
//         arr[j] = arr[i];
//       }
  
//       if (arr[i] === 0) {
//         j--;
//         if (j < arr.length) {
//           arr[j] = 0;
//         }
//       }
  
//       i--;
//       j--;
//     }
  
//     console.log(arr);
//   }
  
//   duplicateZeros([1, 0, 4, 3, 0, 5, 1, 0, 2, 6]);


// function moveZeroes(arr) {
//   let i = 0;
//   let j = 0;
//   while (j < arr.length){
//     if(arr[j] !== 0){
//       if(i !== j){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp;
//       }
//       i++;
//     }
//     j++;
//   }
//   console.log(arr);
// }
// moveZeroes([0,1,0,1,1,0,1,0,1,0,0,1,1,1])

function sortColors(nums) {
  // Your code here
    let low = 0 ,mid = 0, high = nums.length - 1;
    while(mid<=high){
        if(nums[mid] === 0){
            [nums[low],nums[mid]] = [nums[mid],nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if(nums[mid] === 2){
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;
        }
    }
    console.log(nums)
}

sortColors([2, 0, 2, 1, 1, 0]);