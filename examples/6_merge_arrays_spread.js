// 6_merge_arrays_spread.js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log('[...a, ...b] ->', merged);

module.exports = { a, b, merged };
