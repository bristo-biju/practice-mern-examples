// run_all_examples.js - run each example file and separate outputs
const { spawnSync } = require('child_process');
const path = require('path');

const examples = [
  '1_numbers_1_to_10.js',
  '2_sum_array.js',
  '3_max_in_array.js',
  '4_even_or_odd.js',
  '5_reverse_string.js',
  '6_merge_arrays_spread.js',
  '7_filter_evens.js',
  '8_template_literals.js',
  '9_arrow_greet.js',
];

for (const ex of examples) {
  console.log('\n===== Running', ex, '=====');
  const full = path.join(__dirname, ex);
  const out = spawnSync('node', [full], { encoding: 'utf8' });
  if (out.error) {
    console.error('Failed to run', ex, out.error);
  } else {
    process.stdout.write(out.stdout);
    process.stderr.write(out.stderr);
  }
}
