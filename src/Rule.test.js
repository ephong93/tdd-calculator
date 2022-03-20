import Rule from './Rule'

describe('Rule', () => {
  it('rule has operate funciton', () => {
    const rule = new Rule()
    expect(rule.operate).toBeTruthy()
  })

})