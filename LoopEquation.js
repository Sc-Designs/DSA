function isAutomorphic(n) {
    const sq = n * n;
    return sq.toString().endsWith(n.toString()) ? "yes" : "no";
}
console.log(isAutomorphic(76));

const arr = [1, 2, 3, 4];
const res = arr.every(x => x < 5);
console.log(res); 