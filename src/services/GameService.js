import Users from '../schema/user/user'
import Games from '../schema/game/game'

class GameService {
  async createGame({ userId }) {
    try {
      let user = await Users.findById(userId)
  
      if (!user) {
        new Error("Game: user does not exists")
      }
      const newGame = await Game.create({currency: 0})

      const res = await User.update({ _id: userId}, { $push: { games: newGame._id }})

      return newGame
    } catch (err) {
      new Error("Game: error in create")
    }
  }
  async getGame(userId, gameId) {
    try {
      let user = await Users.findById(userId)
  
      if (!user) {
        new Error("Game: user does not exists")
      }
      // const currentGame = user.games.find(g => g._id === gameId)

      const currentGame = await Games.findById(gameId)
      if (!currentGame) {
        new Error("Game: game does not exists")
      }

      return currentGame
    } catch (err) {
      new Error("Game: error in get")
    }
  }

}

const singletonGameService = new GameService()

export default singletonGameService