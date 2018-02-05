const add = require('../src/add')
const expect = require('chai').expect

describe('加法函数测试', () => {
  it('1 加 1 应该等于 2', () => {
    expect(add(1, 1)).to.be.equal(2)
  })
  it('-1 加 -1应该等于 -2', () => {
    expect(add(-1, -1)).to.be.equal(-2)
  })
})
