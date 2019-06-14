import GameController from "../controllers/GameController"
import GenericRouter from "./GenericRouter"

class GameRouter extends GenericRouter {
  constructor(router, logger) {
    super(router, 'gameId', new GameController(), logger)
  }
}

export default GameRouter
