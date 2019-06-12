import mockingoose from 'mockingoose'
import Factory from './factory'
import Assert from 'assert'

describe('SUITE Factory ', () => { 
  const factory = {
    id: '507f191e810c19729de860ea',
    dimensions: { n: 1, m: 1 },
    nodes: [],
  }

  describe('CRUD', () => {
    it('Can find a Factory', () => {
      mockingoose(Factory).toReturn(factory, 'find')
      return Factory.find({}).then(factories => {
        expect(JSON.parse(JSON.stringify(factories))).toMatchObject(factory);
      })
    })

    it('Find with error', () => {
      mockingoose(Factory).toReturn(new Error('jaskdjaksd'), 'find')
      return Factory.find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


