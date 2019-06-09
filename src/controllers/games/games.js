import GameService from '../../services/GameService'

export const createGame = (req, res) => {
    const { userId } = req.params
    GameService.createGame(userId)
      .then(result => {
        res.status(200).send({
          type: 'Success',
          result,
        })
      }).catch(result => {
        console.log(result)
        res.status(400).send({
          type: 'Error',
          result,
        })
      })
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
    console.log(result)
    res.status(400).send({
      type: 'Error',
      result,
    })
  }
}

export const deleteGame = async (req, res) => {
  try {
    const { userId, gameId } = req.params
    const result = await GameService.deleteGame(userId, gameId)
    res.status(200).send({
      type: 'Success',
      result,
    })
  } catch(result) {
    console.log(result)
    res.status(400).send({
      type: 'Error',
      result,
    })
  }
}

export const updateGame = async (req, res) => {
  try {
    const { userId, gameId } = req.params
    const game = req.body
    const result = await GameService.updateGame(userId, gameId, game)
    res.status(200).send({
      type: 'Success',
      result,
    })
  } catch(result) {
    console.log(result)
    res.status(400).send({
      type: 'Error',
      result,
    })
  }
}
