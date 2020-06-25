const { add } = require('./utils')

it('Should return the sum of two numbers', () => {
    expect(add(2,2)).toBe(4)
})