import mockingoose from 'mockingoose'

import NodeBlock from './node';
import Assert from 'assert';

describe('SUITE Node ', () => { 

  describe('CRUD', () => {

    it('Can find a node', () => {
      const _node = {
        machineId: 'machine_id',
        materials: []
      }
      mockingoose(NodeBlock).toReturn(_node, 'find')
      return NodeBlock.find({}).then(nodes => {
        expect(JSON.parse(JSON.stringify(nodes))).toMatchObject(_node);
      })
    })

    it('Find with error', () => {
      const _node = {
        machineId: 'machine_id',
        materials: []
      }
      mockingoose(NodeBlock).toReturn(new Error('jaskdjaksd'), 'find')
      return NodeBlock.find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


