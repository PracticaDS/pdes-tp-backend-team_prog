import mockingoose from 'mockingoose'
import User from './user'
import Assert from 'assert'

describe('SUITE User ', () => { 
  const user = {
    id: 'id',
    username: 'username',
    factories: []
  }
  describe('CRUD', () => {

    it('Can find a User', () => {
      mockingoose(User).toReturn(user, 'find')
      return User.find({}).then(users => {
        expect(JSON.parse(JSON.stringify(users))).toMatchObject(user);
      })
    })

    it('Find with error', () => {
      mockingoose(User).toReturn(new Error('jaskdjaksd'), 'find')

      return User .find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


