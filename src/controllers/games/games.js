import GameService from '../../services/GameService'

export const createGame = async (req, res) => {
  try {
    const { userId } = req.params
    const result = await GameService.createGame(userId)
    res.status(200).send({
      type: 'Success',
      result,
    })
  } catch(result) {
    res.status(400).send({
      type: 'Error',
      result,
    })
  }
}

export const getGame = async (req, res) => {
  try {
    const { userId, gameId } = req.params
    const result = await GameService.getGame(userId, gameId)
    res.status(200).send({
      type: 'Success',
      result,
    })
  } catch(result) {
    res.status(400).send({
      type: 'Error',
      result,
    })
  }
}
