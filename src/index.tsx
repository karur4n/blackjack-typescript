import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Deck from './deck'
import Hand from './hand'
import Dealer from './dealer'

registerServiceWorker()

document.addEventListener('DOMContentLoaded', () => {
  main()
})

const deck = Deck.getInstance()
const dealerHand = new Hand()
const dealer = new Dealer(dealerHand, deck)

function render(containerEl: HTMLElement): void {
  containerEl.innerHTML = ''

  const deckEl = document.createElement('p')

  if (deck.numberOfCards() > 0) {
    deckEl.innerText = 'デッキあるよ'
  } else {
    deckEl.innerText = 'デッキなし'
  }
  containerEl.appendChild(deckEl)

  const dealerHandEl = document.createElement('div')

  dealer.hand.valueOf().forEach((card) => {
    const cardEl = document.createElement('span')
    cardEl.innerText = `${card.type} / ${card.number}`
    dealerHandEl.appendChild(cardEl)
    dealerHandEl.appendChild(document.createElement('br'))
  })

  containerEl.appendChild(dealerHandEl)

  const deckCardEl = document.createElement('span')
  deckCardEl.innerText = ''


  containerEl.appendChild(deckCardEl)

  const scoreEl = document.createElement('p')
  scoreEl.innerText = `score: ${dealer.hand.getScore()}`

  containerEl.appendChild(scoreEl)
}

const appEl = document.getElementById('app')

function main() {

  dealer.draw()
  dealer.draw()

  if (appEl) {
    render(appEl)
  }
}

function click() {
  while (dealer.isDrawNext()) {
    dealer.draw()
  }

  if (appEl) {
    render(appEl)
  }
}

document.addEventListener('click', () => {
  click()
})
