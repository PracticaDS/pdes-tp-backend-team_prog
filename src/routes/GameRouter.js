import GameController from "../controllers/GameController"
import CrudRouter from "./CrudRouter"

class GameRouter extends CrudRouter {
  constructor(router, logger) {
    super(router, new GameController(), 'gameId', logger)
  }
}

export default GameRouter
