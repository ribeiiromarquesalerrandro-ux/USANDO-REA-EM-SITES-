const assert = require('assert');
const { soma } = require('./soma');
assert.strictEqual(soma(2, 3), 5);
assert.strictEqual(soma(-1, 1), 0);
console.log('ok');
