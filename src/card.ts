class Card {
  public number: number
  // ほんとうは Enum 使った方がよい
  public type: string

  constructor(n: number, type: string) {
    this.number = n
    this.type = type
  }
}

export default Card