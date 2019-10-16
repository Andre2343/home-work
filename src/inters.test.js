const intersArray = require('./intersection.js');

describe('intersArray()', () => {
  test('intersection array', () => {
    const result = intersArray([2, 1, 3], [2, 3, 4]);
    expect(result).toEqual([2,3]);
  });
});