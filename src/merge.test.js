const merge = require('./merge');

describe('merge()', () => {
  test('merge object', () => {
    const result = merge([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 0, b: 4, d: 5, }]);
    expect(result).toEqual({ a: 1, b: 2, c:4, d: 5 });
  });
});