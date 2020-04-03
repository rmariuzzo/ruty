import { addParams } from './add-params'

describe('addParams', () => {
  it('should return path when no param is given', () => {
    const path = '/path'
    expect(addParams(undefined, path)).toBe(path)
  })

  it('should return path with param when no param is given', () => {
    const path = '/path/:param'
    expect(addParams(undefined, path)).toBe(path)
  })

  it('should return path with param when param is given', () => {
    const path = '/path/:param'
    const param = 123
    expect(addParams(undefined, path, { param })).toBe(`/path/${param}`)
  })

  it('should return path with param when global param is given', () => {
    const path = '/path/:globalParam'
    const globalParam = 456
    expect(addParams({ params: { globalParam } }, path)).toBe(`/path/${globalParam}`)
  })
})
