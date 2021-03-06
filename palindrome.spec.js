let isPalindrome = phrase  => {
  if(typeof phrase !== 'string') throw new Error('it must be a String');
  if(phrase === '') throw new Error('empty strings are not palindrome');
  if(phrase.trim() === '') return false;
  return phrase === phrase.split('').reverse().join('')
};

describe('canary test for palindrome task', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

it('true for mom', () => {
  expect(isPalindrome('mom')).toBe(true);
});

it('false for dude', () => {
  expect(isPalindrome('dude')).toBe(false);
});

it('false for dad mom', () => {
  expect(isPalindrome('dad mom')).toBe(false);
});

it('false for whitespace', () => {
  expect(isPalindrome('     ')).toBe(false);
});

it('error for empty string', () => {
  expect(() => {
    isPalindrome('');
  }).toThrowError('empty strings are not palindrome');
});

it('error for not a string', () => {
  expect(() => {
    isPalindrome(121);
  }).toThrowError('it must be a String');
});