const diffArray = require('./diff-arr.js');

describe('diffArray()', () => {
  test('diff array', () => {
    const result = diffArray([1,2,3,4],[1,3,4]);
    expect(result).toEqual([2]);
  });
});