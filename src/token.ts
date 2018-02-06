function quote(str: string) {
  return str.replace(/\"/g, '"')
}

class Token {
  value: string
  type: string

  constructor(value: string, type: string) {
    this.value = value
    this.type = type
  }

  toString(): string {
    if (this.type === 'text') {
      return `"${quote(this.value)}"`
    }
    return `(${this.value})`
  }
}
export default Token
