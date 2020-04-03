import { addQuery } from './add-query'

describe('addQuery', () => {
  it('should return path when no query is given', () => {
    const path = '/path'
    expect(addQuery(undefined, path)).toBe(path)
  })

  it('should return path with query when no query is given', () => {
    const path = '/path?query'
    expect(addQuery(undefined, path)).toBe(path)
  })

  it('should return path with query when query is given', () => {
    const path = '/path?query'
    const query = 123
    expect(addQuery(undefined, path, { query })).toBe(path + '=' + query)
  })

  it('should return path with query when global query is given', () => {
    const path = '/path?globalQuery'
    const globalQuery = 456
    expect(addQuery({ query: { globalQuery } }, path)).toBe(path + '=' + globalQuery)
  })
})
