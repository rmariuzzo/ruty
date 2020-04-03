import { paramTransformer } from './param-transformer'

describe('paramTransformer', () => {
  it('should return the given value', () => {
    const name = 'a name'
    const value = 'a value'
    expect(paramTransformer(name, value)).toBe(value)
  })

  it('should return the given name when the value is undefined', () => {
    const name = 'a name'
    const value = undefined
    expect(paramTransformer(name, value)).toBe(name)
  })
})
