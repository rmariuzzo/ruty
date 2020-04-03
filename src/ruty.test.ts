import { Ruty } from './ruty'

describe('Ruty', () => {
  it('should create an instance without configuration', () => {
    expect(() => Ruty.configure()).not.toThrow()
  })

  it('should create an instance with empty configuration', () => {
    expect(() => Ruty.configure({})).not.toThrow()
  })

  it('should create an instance that export a callable route property', () => {
    const ruty = Ruty.configure()
    expect(ruty.route).toEqual(expect.any(Function))
    expect(ruty.route('/path')).toMatchObject({ build: expect.any(Function) })
  })
})
