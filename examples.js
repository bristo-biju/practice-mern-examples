// examples.js - small JS examples for tasks 1-9

console.log('--- 1) Numbers 1 to 10 ---');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('\n--- 2) Sum array ---');
function sumArray(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
console.log('sumArray([1,2,3]) ->', sumArray([1, 2, 3]));
console.log('sumArray([]) ->', sumArray([]));

console.log('\n--- 3) Max in array ---');
function maxInArray(arr) {
  if (!arr || arr.length === 0) return undefined;
  return arr.reduce((max, n) => (n > max ? n : max), arr[0]);
}
console.log('maxInArray([5,10,3]) ->', maxInArray([5, 10, 3]));
console.log('maxInArray([]) ->', maxInArray([]));

console.log('\n--- 4) Even or odd ---');
function evenOrOdd(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return null;
  return n % 2 === 0 ? 'even' : 'odd';
}
console.log('evenOrOdd(7) ->', evenOrOdd(7));
console.log('evenOrOdd(8) ->', evenOrOdd(8));

console.log('\n--- 5) Reverse string ---');
function reverseString(s) {
  return String(s).split('').reverse().join('');
}
console.log("reverseString('hello') ->", reverseString('hello'));

console.log('\n--- 6) Merge arrays with spread ---');
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log('[...a, ...b] ->', merged);

console.log('\n--- 7) Filter even numbers ---');
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log('evens ->', evens);

console.log('\n--- 8) Template literals ---');
const name = 'Alice';
const msg = `Hello ${name}, welcome!`;
console.log('msg ->', msg);

console.log('\n--- 9) Arrow function greeting ---');
const greet = name => `Hello, ${name}`;
console.log("greet('Bob') ->", greet('Bob'));
