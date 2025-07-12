function  maxWaterContainer(arr){
    let i = 0, j = arr.length-1, ans = 0;
    while(i<j){
        ans = Math.max(ans, Math.min(arr[i], arr[j]) * (j - i));
        if(arr[i]<arr[j]){
            i++;
        } else {
            j--;
        }
    }
    console.log(ans);
}
maxWaterContainer([1,8,6,2,5,4,8,3,7])