import { trim } from '@utils/validationHelpers';

describe('trim', () => {
  test('should return null if value is null', () => {
    const result = trim(null);
    expect(result).toBeNull();
  });

  test('should trim leading and trailing whitespaces', () => {
    const result = trim('  hello world  ');
    expect(result).toBe('hello world');
  });

  test('should not trim spaces in the middle of the string', () => {
    const result = trim('  hello   world  ');
    expect(result).toBe('hello   world');
  });

  test('should handle empty strings correctly', () => {
    const result = trim('  ');
    expect(result).toBe('');
  });
});
