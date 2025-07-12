let prompt = require("prompt-sync")();
let a = Number(prompt("Enter a number : "));
let i=0,s=0;
let sample = (a)=>{
    while(a>0){
        let r = a%10;
        let p = Math.pow(8,i);
        s = s+p*r;
        i=i+1;
        a=Math.floor(a/10);
    }
    return s;
}
let ans = sample(a);
console.log(ans);