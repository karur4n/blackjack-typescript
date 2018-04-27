import Card from './card'
import Type from './Type'

class Deck {
  private cards: Card[] = []

  private static instance: Deck = new Deck()

  public static getInstance(): Deck {
    return this.instance
  }

  private constructor() {
    Array.from(Array(13), (_, k) => k + 1).forEach((i) => {
      for (const type in Type) {
        if (Type.hasOwnProperty(type)) {
          this.cards.push(new Card(i, type))
        }
      }
    })

    // 愛嬌で3回
    this.shuffle()
    this.shuffle()
    this.shuffle()
  }

  public draw(): Card {
    if (this.numberOfCards() <= 0) {
      throw new Error('デッキの枚数が0です')
    }

    const card = this.cards.pop()

    if (card === undefined) {
      throw new Error('Unexpected error')
    }

    return card
  }

  public numberOfCards(): number {
    return this.cards.length
  }

  public valueOf(): Card[] {
    return this.cards
  }

  private shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = tmp
    }
  }
}

export default Deck