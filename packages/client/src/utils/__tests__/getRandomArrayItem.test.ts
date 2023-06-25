import { getRandomArrayItem } from '@utils/getRandomArrayItem';

describe('getRandomArrayItem', () => {
  const mockMath = Object.create(global.Math);
  global.Math = mockMath;

  afterEach(() => {
    mockMath.random.mockRestore();
  });

  test('should return an item from the array', () => {
    const array = ['apple', 'banana', 'cherry'];
    mockMath.random = jest.fn(() => 0);
    const result = getRandomArrayItem(array);
    expect(result).toBe('apple');
  });

  test('should return undefined for an empty array', () => {
    const array: [] = [];
    const result = getRandomArrayItem(array);
    expect(result).toBeUndefined();
  });

  test('should handle arrays of various types', () => {
    const array = ['apple', 123, true, { fruit: 'apple' }, [1, 2, 3]];
    mockMath.random = jest.fn(() => 0.3);
    const result = getRandomArrayItem(array);
    expect(result).toBe(123);
  });
});
