import {
  validateEmail,
  validateLogin,
  validateNames,
  validatePassword,
  validatePhone,
} from '@utils/authFormValidation';

describe('validatePassword', () => {
  test('should return an error if password is null', () => {
    const result = validatePassword(null);
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if password is empty', () => {
    const result = validatePassword('   ');
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if password is less than 8 characters', () => {
    const result = validatePassword('Passw1@');
    expect(result).toBe('Пароль должен быть не короче 8 символов');
  });

  test('should return an error if password is more than 40 characters', () => {
    const result = validatePassword('Password@1234567890123456789012345678901234567890');
    expect(result).toBe('Пароль должен быть не длиннее 40 символов');
  });

  test('should return an error if password does not meet complexity requirements', () => {
    const result = validatePassword('Password12345678');
    expect(result).toBe(
      'Пароль должен состоять из букв латинского алфавита, содержать минимум одну большую и маленькую букву, один спец символ'
    );
  });

  test('should not return an error if password meets all requirements', () => {
    const result = validatePassword('Password@123');
    expect(result).toBeUndefined();
  });
});

describe('validateLogin', () => {
  test('should return an error if login is null', () => {
    const result = validateLogin(null);
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if login is empty', () => {
    const result = validateLogin('');
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if login is less than 4 characters', () => {
    const result = validateLogin('Usr');
    expect(result).toBe('Имя должно быть не короче 4 символов');
  });

  test('should return an error if login is more than 20 characters', () => {
    const result = validateLogin('ThisIsAVeryLongUserName');
    expect(result).toBe('Логин должен быть не длиннее 20 символов');
  });

  test('should return an error if login contains non-alphanumeric characters', () => {
    const result = validateLogin('User@name');
    expect(result).toBe('Логин может состоять только из цифр и букв латинского алфавита');
  });

  test('should not return an error if login meets all requirements', () => {
    const result = validateLogin('UserName123');
    expect(result).toBeUndefined();
  });
});

describe('validateNames', () => {
  test('should return an error if name is null', () => {
    const result = validateNames(null);
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if name is empty', () => {
    const result = validateNames('');
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if name is more than 20 characters', () => {
    const result = validateNames('ThisIsAVeryLongUserName');
    expect(result).toBe('Имя должно быть не длиннее 20 символов');
  });

  test('should return an error if name contains non-alphabetical characters', () => {
    const result = validateNames('Name123');
    expect(result).toBe('Логин может состоять только из букв латинского алфавита или кирилицы');
  });

  test('should not return an error if name meets all requirements', () => {
    const result = validateNames('Имя');
    expect(result).toBeUndefined();
  });
});

describe('validateEmail', () => {
  test('should return an error if email is null', () => {
    const result = validateEmail(null);
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if email is empty', () => {
    const result = validateEmail('');
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if email is more than 254 characters', () => {
    const result = validateEmail('a'.repeat(255) + '@example.com');
    expect(result).toBe('Email должен быть не длиннее 254 символов');
  });

  test('should return an error if email does not match the regex', () => {
    const result = validateEmail('username@.com');
    expect(result).toBe('Некорректный адрес почты');
  });

  test('should not return an error if email meets all requirements', () => {
    const result = validateEmail('username@example.com');
    expect(result).toBeUndefined();
  });
});

describe('validatePhone', () => {
  test('should return an error if phone is null', () => {
    const result = validatePhone(null);
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if phone is empty', () => {
    const result = validatePhone('');
    expect(result).toBe('Поле обязательно для ввода');
  });

  test('should return an error if phone is less than 10 characters', () => {
    const result = validatePhone('123456789');
    expect(result).toBe('Телефон должен быть не короче 10 символов');
  });

  test('should return an error if phone is more than 15 characters', () => {
    const result = validatePhone('1234567890123456');
    expect(result).toBe('Телефон должен быть не длиннее 15 символов');
  });

  test('should return an error if phone contains non-numeric characters', () => {
    const result = validatePhone('123456789a');
    expect(result).toBe('Телефон должен состоять из цифр, может начинается с плюса');
  });

  test('should not return an error if phone meets all requirements', () => {
    const result = validatePhone('+1234567890');
    expect(result).toBeUndefined();
  });
});
