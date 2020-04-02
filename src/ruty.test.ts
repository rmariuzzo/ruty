import { route } from './ruty'

describe('ruty', () => {
  describe('route', () => {
    it('should return a builder', () => {
      const path = '/this/is/a/path'
      expect(route(path)).toMatchObject({ build: expect.any(Function) })
    })
  })

  describe('route instance', () => {
    it('should be a function', () => {
      const path = '/this/is/a/path'
      expect(route(path).build()).toEqual(expect.any(Function))
    })

    it('should have a path property with the given path during building', () => {
      const path = '/this/is/a/path'
      const routeInstance = route(path).build()
      expect(routeInstance).toHaveProperty('path', path)
    })

    it('should generate a route equal to the given path during building', () => {
      const path = '/this/is/a/path'
      const routeInstance = route(path).build()
      expect(routeInstance()).toBe(path)
    })

    it('should generate a route equal to the given path with params during building', () => {
      const path = '/this/is/a/path/:param'
      const routeInstance = route(path).build()
      expect(routeInstance()).toBe(path)
    })

    it('should generate a route with given param', () => {
      const path = '/this/is/a/path/:param'
      const routeInstance = route(path).build<{ param: string }>()
      const param = '123'
      expect(routeInstance({ param })).toBe('/this/is/a/path/' + param)
    })

    it('should generate a route with given params', () => {
      const path = '/this/is/a/path/:param1/:param2'
      const routeInstance = route(path).build<{
        param1: number
        param2: number
      }>()
      const param1 = 123
      const param2 = 456
      expect(routeInstance({ param1, param2 })).toBe('/this/is/a/path/' + param1 + '/' + param2)
    })

    it('should generate a route equal to the given path with query string during building', () => {
      const path = '/path?query'
      const routeInstance = route(path).build()
      expect(routeInstance()).toBe(path)
    })

    it('should generate a route with given query string', () => {
      const path = '/path?query'
      const routeInstance = route(path).build<{ query: string }>()
      const query = 'value'
      expect(routeInstance({ query })).toBe('/path?query=' + query)
    })

    it('should generate a route with given queries string', () => {
      const path = '/path?query1&query2'
      const routeInstance = route(path).build<{
        query1: string
        query2: string
      }>()
      const query1 = 'value1'
      const query2 = 'value2'
      expect(routeInstance({ query1, query2 })).toBe('/path?query1=' + query1 + '&query2=' + query2)
    })
  })
})
