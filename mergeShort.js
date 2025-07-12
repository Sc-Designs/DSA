
function mergeSort(arr, left, right) {
  // Your code here
    if(left>=right)return;
    let mid=Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    helper(arr,left,mid,right);
}
function helper(arr,f,m,l){
    let temp = new Array(l-f+1).fill(0);
    let i=f,j=m+1,k=0;
    while(i<=m && j<=l){
        if(arr[i]<arr[j]) temp[k++]=arr[i++]
        else temp[k++]=arr[j++]
    }
    while(i<=m){
        temp[k++]=arr[i++]
    }
    while(j<=l){
        temp[k++]=arr[j++]
    }
    i=f,k=0;
    while(k<temp.length){
        arr[i++]=temp[k++]
    }
}
let arr = [38, 27, 43, 9, 82, 10];
mergeSort(arr, 0, arr.length-1)
console.log(arr)