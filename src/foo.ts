// ほんとうは Enum 使った方がよい
import Dealer from './dealer'
import Deck from './deck'
import Hand from './hand'

export function main() {
  const deck = Deck.getInstance()
  const dealerHand = new Hand()
  const dealer = new Dealer(dealerHand, deck)

  while (dealer.isDrawNext()) {
    dealer.draw()
  }

  console.log(dealer.hand.getScore())
}
