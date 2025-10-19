// 3_max_in_array.js
function maxInArray(arr) {
  if (!arr || arr.length === 0) return undefined;
  return arr.reduce((max, n) => (n > max ? n : max), arr[0]);
}

console.log('maxInArray([5,10,3]) ->', maxInArray([5, 10, 3]));
console.log('maxInArray([]) ->', maxInArray([]));

module.exports = { maxInArray };
