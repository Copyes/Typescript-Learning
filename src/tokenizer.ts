import Token from './token'

const startToken = '{{'
const endToken = '}}'

class Tokenizer {
  getTokens(templateStr: string): Array<Token> {
    let str = templateStr

    let tokens: Array<Token> = []

    let index = str.indexOf(startToken)

    // 如果没有包含{{说明是普通的text节点
    if (index === -1) {
      tokens.push(new Token(templateStr, 'text'))
      return tokens
    }
    while ((index = str.indexOf(startToken)) !== -1) {
      let textValue = str.slice(0, index)

      tokens.push(new Token(textValue, 'text'))

      str = str.slice(index)
      index = str.indexOf(endToken)
      if (index === -1) {
        throw new Error('template error')
      }

      // 获取占位符
      let variable = str.slice(2, index)

      tokens.push(new Token(variable, 'variable'))
      str = str.slice(index + 2)
    }
    if (str.length > 0) {
      tokens.push(new Token(str, 'text'))
    }
    return tokens
  }
}

export default new Tokenizer()
