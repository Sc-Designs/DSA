// function interSectionOfArray(arr1,arr2){
//     let map = new Map();
//     for(let i = 0; i<arr1.length ; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 if(!map.has(arr1[i])){
//                     map.set(arr1[i], true)
//                 }
//             }
//         }
//     }
//     console.log([...map.keys()]);
// }

// interSectionOfArray([9, 4, 9, 8, 4],[4, 9, 5]);

// function countOfSubArrayWithSumK(arr,k){
//     let sum = 0;
//     let map = new Map();
//     let count = 0;
//     map.set(sum,1);
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         if(map.has(sum-k)){
//             count += map.get(sum-k);
//         }
//         map.set(sum, (map.get(sum)||0)+1);
//     }
//     console.log(count);
// }
// countOfSubArrayWithSumK([10,2,-2,-20,10], -10)

function longestSubArray(nums, k){
    let sum = 0;
    let map = new Map();
    let long = 0;
    map.set(sum, -1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(map.has(sum-k)){
            long = Math.max(long, i-map.get(sum-k))
        }
        if(!map.has(sum)){
            map.set(sum,i);
        }
    }
    console.log(long);
}
longestSubArray([10,5,2,7,1,-10], 15)