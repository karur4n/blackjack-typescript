import Card from './card'

class Hand {
  private value: Card[] = []

  public addCard(card: Card): void {
    this.value.push(card)
  }

  public getScore(): number {
    if (this.value.length === 0) {
      return 0
    }

    return this.value.map((card) => card.number).reduce((acc, n) => acc + n)
  }

  public valueOf(): Card[] {
    return this.value
  }
}

export default Hand