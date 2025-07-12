// let arr = [
//   [1,2,3,4,5,6,7],
//   [24,25,26,27,28,29,8],
//   [23,40,41,42,43,30,9],
//   [22,39,48,49,44,31,10],
//   [21,38,47,46,45,32,11],
//   [20,37,36,35,34,33,12],
//   [19,18,17,16,15,14,13]
// ];
// let top = 0,
// bottom = arr.length - 1,
// left = 0,
// right = arr[0].length - 1;
// while ( top <= bottom && left <= right){
//     for(let i = left; i <= right; i++){
//         process.stdout.write(`${arr[top][i]} `)
//     }
//     top++;
//     for(let i = top; i <= bottom; i++){
//         process.stdout.write(`${arr[i][right]} `)
//     }
//     right--;
//     if(top <= bottom){
//         for(let i = right; i >= left; i--){
//             process.stdout.write(`${arr[bottom][i]} `)
//         }
//         bottom--;
//     }
//     if(left <= right){
//         for(let i = bottom; i >=top ; i--){
//             process.stdout.write(`${arr[i][left]} `)
//         }
//         left++;
//     }
// }


let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
    }
}
for(let i = 0; i < arr.length; i++){
    let k = 0, j = arr[i].length -1;
    while(k < j){
        let temp = arr[i][k];
        arr[i][k] = arr[i][j];
        arr[i][j] = temp;
        k++;
        j--;
    }
}

console.log(arr);
