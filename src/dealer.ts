import Player from './player'

class Dealer extends Player {
  public isDrawNext(): boolean {
    return this.hand.getScore() < 17
  }
}

export default Dealer