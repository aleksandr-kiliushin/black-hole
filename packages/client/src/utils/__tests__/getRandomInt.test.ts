import { getRandomInt } from '@utils/getRandomInt';

describe('getRandomInt', () => {
  test('should return integer', () => {
    const result = getRandomInt(1, 10);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should return value in correct range', () => {
    const min = 1;
    const max = 10;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('should work with negative numbers', () => {
    const min = -10;
    const max = -1;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test('should work correctly if min and max are the same', () => {
    const min = 5;
    const max = 5;
    const result = getRandomInt(min, max);
    expect(result).toBe(min);
  });
});
