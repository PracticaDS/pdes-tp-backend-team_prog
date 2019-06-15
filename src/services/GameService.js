import Users from '../schema/user/user'
import Games from '../schema/game/game'
import GenericService from './GenericService'
import { generateGame } from '../utils/gridGenerator'

class GameService extends GenericService {
  constructor() {
    super(Users)
    this._subModel = Games
  }

  create = async ({ userId,
    body: { name,
      dimensions = { rows: 10, columns: 10} },
      currency = 10000
    }) => {
      try {
        const user = await this._model.findById(userId)
        if (!user) {
          new Error("Game: user does not exists")
        }

        const game = generateGame(name, dimensions, currency)
        const newGame = await this._subModel.create(game)
        await this._model.findByIdAndUpdate(userId, { $push: { games: newGame._id } })
        return newGame
      } catch (err) {
        new Error("Game: error in creation")
      }
  }

  get = async ({ userId, gameId }) => {
    try {
      const currentUser = await this._model
        .find({_id: userId, "games._id": gameId })
      if (!currentUser) {
        new Error("Game: game does not exists")
      }

      const currentGame = await this._subModel
        .findById(gameId)
      return currentGame
    } catch (err) {
      new Error("Game: error in get")
    }
  }

  delete = async ({ userId, gameId }) => {
    try {
      const deletedUserGame = await this._model
        .findByIdAndUpdate(userId, { $pull: { games: gameId } })
      if (!deletedUserGame) {
        new Error("Game: game does not exists")
      }
      const deletedGame = await this._subModel
        .findByIdAndDelete(gameId)

      return deletedGame
    } catch (err) {
      new Error("Game: can not delete")
    }
  }

  update = async ({ userId, gameId }, { body: { currency, factory } }) => {
    try {
      const currentUser = await this._model
        .find({_id: userId, "games._id": gameId })
      if (!currentUser) {
        new Error("Game: game does not exists")
      }

      const currentGame = await this._subModel.findByIdAndUpdate(gameId, { factory, currency })

      if (!currentGame) {
        new Error("Game: game does not exists")
      }

      return currentGame
    } catch (err) {
      new Error("Game: error in get")
    }
  }

  all = async ({ userId }) => {
    try {
      const user = await this._model
        .findById(userId)
        .populate({
          path: 'games',
          select: { _id: true, name: true, currency: true, updated_at: true }
        })
      if (!user) {
        new Error("Game: user does not exists")
      }
      return user.games
    } catch (err) {
      new Error("Game: can not finish all")
    }
  }

}

export default GameService
