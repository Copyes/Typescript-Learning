import tokenizer from './tokenizer'

class Engine {
  compile(template: string): Object {
    let tokens = tokenizer.getTokens(template)

    let functionBody = tokens.join(' + ')

    return {
      render: new Function('context', `with(context) {return ${functionBody} }`)
    }
  }
}

export default new Engine()
