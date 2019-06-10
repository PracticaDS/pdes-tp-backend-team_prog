import Users from '../schema/user/user'
import Games from '../schema/game/game'
import mongoose from 'mongoose'

class GameService {
  async createGame(userId, game) {
    try {
      const userObjectId = mongoose.Types.ObjectId(userId)
      let user = await Users.find({_id: userObjectId})
  
      if (!user) {
        new Error("Game: user does not exists")
      }
      const newGame = await Games.create({...game, currency: 0})
      await Users.update({ _id: userObjectId }, { $push: { games: newGame._id } }, {upsert:true})
      return newGame
    } catch (err) {
      new Error("Game: error in create")
    }
  }
  async getGame(userId, gameId) {
    try {
      const userObjectId = mongoose.Types.ObjectId(userId)
      let user = await Users.findById(userObjectId)

      if (!user) {
        new Error("Game: user does not exists")
      }
      const gameObjectId = mongoose.Types.ObjectId(gameId)
      const currentGame = await Games.findById(gameObjectId)
      if (!currentGame) {
        new Error("Game: game does not exists")
      }

      return currentGame
    } catch (err) {
      new Error("Game: error in get")
    }
  }
  async deleteGame(userId, gameId) {
    try {
      const userObjectId = mongoose.Types.ObjectId(userId)
      let user = await Users.findById(userObjectId)

      if (!user) {
        new Error("Game: user does not exists")
      }
      const gameObjectId = mongoose.Types.ObjectId(gameId)
      const currentGame = await Games.findById(gameObjectId)
      if (!currentGame) {
        new Error("Game: game does not exists")
      }

      await Users.update({ _id: userObjectId }, { $pull: { games: gameObjectId }})
      await Games.deleteOne({ _id: gameObjectId })

      return currentGame
    } catch (err) {
      new Error("Game: error in get")
    }
  }
  async updateGame(userId, gameId, { currency, factory }) {
    try {
      const userObjectId = mongoose.Types.ObjectId(userId)
      let user = await Users.findById(userObjectId)

      if (!user) {
        new Error("Game: user does not exists")
      }
      const gameObjectId = mongoose.Types.ObjectId(gameId)
      let currentGame = await Games.findById(gameObjectId)
      if (!currentGame) {
        new Error("Game: game does not exists")
      }
      currentGame.currency = currency
      currentGame.factory = factory
      await currentGame.save()
      currentGame = await Games.findById(gameObjectId)

      return currentGame
    } catch (err) {
      console.log(err)
      new Error("Game: error in get")
    }
  }

}

const singletonGameService = new GameService()

export default singletonGameService