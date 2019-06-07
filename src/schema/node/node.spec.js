import mockingoose from 'mockingoose'

import NodeBlock from './node';
import Assert from 'assert';
import { Types } from '../constants';

describe('SUITE Node ', () => { 

  describe('CRUD', () => {
    const node = {
      machine: '507f191e810c19729de860ea',
      materials: []
    }

    it('Can find a Node', () => {
      mockingoose(NodeBlock).toReturn(node, 'find')
      return NodeBlock.find({}).then(nodes => {
        expect(JSON.parse(JSON.stringify(nodes))).toMatchObject(node);
      })
    })

    it('Find with error', () => {
      mockingoose(NodeBlock).toReturn(new Error('jaskdjaksd'), 'find')
      return NodeBlock.find({}).catch(err => {
        Assert.ok(err)
      })
    })

  })
})


