let arr = [40,82,5,8,32,91,19];
quickShort(arr, 0, arr.length-1);
console.log(arr);
function quickShort(arr,first, last){
    if(first>=last)return;
    let pdIdx = helper(arr, first, last);
    quickShort(arr,first,pdIdx-1)
    quickShort(arr, pdIdx+1,last)
}

function helper(arr,first,last){
    let pIdx = arr[last];
    let i = first - 1;
    for(let j = first; j<last;j++){
        if(arr[j]<pIdx){
            i++;
            Swipper(arr, i, j);
        }
    }
    i++;
    Swipper(arr, i, last);
    return i;
}

function Swipper(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}