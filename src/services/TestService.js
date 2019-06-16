
import User from '../schema/user/user'
import Game from '../schema/game/game'
import { generateGame } from '../utils/gridGenerator'

class TestService {
  createFakeUser() {
    return {
      username: "test"
    }
  }

  createFakeGame() {
    const gameName = "test-game"
    const gameDimension = { rows: 10, columns: 10}
    const gameCurrency = 10000
    return generateGame(gameName, gameDimension, gameCurrency)
  }

  async seed() {
    try {
      const user = this.createFakeUser()
      const game = this.createFakeGame()
      // this should be using the auth/user/game service instead of models
      const newUser = await User.create(user)
      const newGame = await Game.create(game)
      await User.findByIdAndUpdate(newUser._id, { $push: { games: newGame._id } })
      return { result: "OK" }
    } catch (err) {
      return { result: "NO" }
    }
  }
  async clean() {
    try {
      await Game.remove({})
      await User.remove({})
      return { result: "OK" }
    } catch (err) {
      return { result: "NO" }
    }
  }
}

export default TestService
