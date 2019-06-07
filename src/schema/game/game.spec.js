import mockingoose from 'mockingoose'
import Game from './game'
import Assert from 'assert'
import { Types } from '../constants';

describe('SUITE game ', () => { 
  const game = {
    id: '507f191e810c19729de860ea',
    factory: '507f191e810c19729de860e2',
    currency: 10000,
  }

  describe('CRUD', () => {
    it('Can find a game', () => {
      mockingoose(Game).toReturn(game, 'find')
      return Game.find({}).then(games => {
        expect(JSON.parse(JSON.stringify(games))).toMatchObject(game);
      })
    })

    it('Find with error', () => {
      mockingoose(Game).toReturn(new Error('jaskdjaksd'), 'find')
      return Game.find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


