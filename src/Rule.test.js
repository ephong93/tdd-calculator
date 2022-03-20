import Rule from './Rule'

describe('Rule', () => {
  it('rule has operate funciton', () => {
    const rule = new Rule()
    expect(rule.operate).toBeTruthy()
    expect(typeof(rule.operate)).toBe('function')
  })
  it('rule has check function', () => {
    const rule = new Rule()
    expect(rule.check).toBeTruthy()
    expect(typeof(rule.check)).toBe('function')
  })
})