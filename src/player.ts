import Deck from './deck'
import Hand from './hand'

abstract class Player {
  protected deck: Deck
  public hand: Hand

  public constructor(hand: Hand, deck: Deck) {
    this.deck = deck
    this.hand = hand
  }

  public draw(): void {
    if (this.deck.numberOfCards() > 0) {
      const card = this.deck.draw()

      this.hand.addCard(card)
    }
  }

  public abstract isDrawNext(): boolean
}

export default Player