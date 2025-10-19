// 4_even_or_odd.js
function evenOrOdd(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return null;
  return n % 2 === 0 ? 'even' : 'odd';
}

console.log('evenOrOdd(7) ->', evenOrOdd(7));
console.log('evenOrOdd(8) ->', evenOrOdd(8));

module.exports = { evenOrOdd };
