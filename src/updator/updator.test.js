import Updator from './updator'

describe('Updator', () => {
  it('Updator has rules', () => {
    const updator = new Updator()
    expect(updator.rules).toStrictEqual([])
  })
  it('Updator has addRule function', () => {
    const updator = new Updator()
    expect(updator.addRule).toBeTruthy()
    expect(typeof(updator.addRule)).toBe('function')
  })
  it('Updator has update function', () => {
    const updator = new Updator()
    expect(updator.update).toBeTruthy()
    expect(typeof(updator.update)).toBe('function')
  })
})