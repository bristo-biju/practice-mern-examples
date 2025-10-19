// 2_sum_array.js
function sumArray(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}

console.log('sumArray([1,2,3]) ->', sumArray([1, 2, 3]));
console.log('sumArray([]) ->', sumArray([]));

module.exports = { sumArray };
