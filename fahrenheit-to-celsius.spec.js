const fahrenheitToCelsius = (fahrenheit) => {
 return (fahrenheit - 32) * 5/9;
}


describe('canary test for fahrenheit to celsius', () => {
  it('shows the infrastructure works', ()=> {
    expect(true).toBe(true);
  })
})

describe('the function to convert fahrenheit to celsius should', () => {
  it('return 0 for 32', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
  it('return 10 for 50', () => {
    expect(fahrenheitToCelsius(50)).toBe(10);
  });
  it.todo('return 100 for 212');
  it.todo('return -40 for -40');
  it.todo('return -273.15 for -459.67');
})