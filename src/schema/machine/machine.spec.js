import mockingoose from 'mockingoose'
import Machine from './machine'
import Assert from 'assert'

describe('SUITE Machine ', () => { 
  const machine = {
    id: '507f191e810c19729de860ea',
    machineType: 'Seller',
    metadata: { key: 'sarasa', bla: 'bla' },
  }
  describe('CRUD', () => {
    it('Can find a Machine', () => {
      mockingoose(Machine).toReturn(machine, 'find')
      return Machine.find({}).then(machines => {
        expect(JSON.parse(JSON.stringify(machines))).toMatchObject(machine);
      })
    })

    it('Find with error', () => {
      mockingoose(Machine).toReturn(new Error('jaskdjaksd'), 'find')
      return Machine.find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


