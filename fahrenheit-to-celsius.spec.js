function fahrenheitToCelsiu(){
  
}

describe('canary test for fahrenheit to celsiu', () => {
  it('shows the infrastructure works', ()=> {
    expect(true).toBe(true);
  })
})

describe('the function to convert fahrenheit to celsiu should', () => {
  it('return 0 for 32', () => {
    expect(fahrenheitToCelsiu(32).toBe(0));
  });
  it.todo('return 10 for 50');
  it.todo('return 100 for 212');
  it.todo('return -40 for -40');
  it.todo('return -273.15 for -459.67');
})