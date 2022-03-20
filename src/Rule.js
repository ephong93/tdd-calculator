class Rule {
  update(a, b) {
    throw new Error('update() must be implemented')
  }
  check(a, b) {
    throw new Error('check() must be implemented')
  }
}

export default Rule