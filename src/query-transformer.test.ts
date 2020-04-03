import { queryTransformer } from './query-transformer'

describe('queryTransformer', () => {
  it('should return the given name when value is undefined', () => {
    const name = 'name'
    const value = undefined
    expect(queryTransformer(name, value)).toBe(name)
  })

  it('should return the given name and value as a query string', () => {
    const name = 'name'
    const value = 'value'
    expect(queryTransformer(name, value)).toBe(name + '=' + value)
  })
})
