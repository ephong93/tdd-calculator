import Rule from './Rule'

describe('Rule', () => {
  it('rule has update function', () => {
    const rule = new Rule()
    expect(rule.update).toBeTruthy()
    expect(typeof(rule.update)).toBe('function')
  })
  it('rule has check function', () => {
    const rule = new Rule()
    expect(rule.check).toBeTruthy()
    expect(typeof(rule.check)).toBe('function')
  })
})