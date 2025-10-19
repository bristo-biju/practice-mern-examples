// 5_reverse_string.js
function reverseString(s) {
  return String(s).split('').reverse().join('');
}

console.log("reverseString('hello') ->", reverseString('hello'));

module.exports = { reverseString };
