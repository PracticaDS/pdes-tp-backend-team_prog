import { Router } from 'express'

const router = Router()


// Require the controllers WHICH WE DID NOT CREATE YET!!
const nodeController = require('../controllers/nodeController.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', nodeController.get);
router.post('/', nodeController.get);
router.get('/:nodeId', nodeController.get);
router.put('/:nodeId', nodeController.get);
router.delete('/:nodeId', nodeController.get);

module.exports = router;