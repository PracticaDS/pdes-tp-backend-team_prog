import GameService from '../services/GameService'
import CrudController from './CrudController'

class GameController extends CrudController {
  constructor(logger){
    super(new GameService(), logger)
  }
  parsePOST(req) {
    return {
      userId: req.params.userId,
      body: req.body,
    }
  }
  parseGET(req) {
    return {
      userId: req.params.userId,
      gameId: req.params.gameId
    }
  }
  parseALL(req) {
    return {
      userId: req.params.userId,
    }
  }
}

export default GameController
