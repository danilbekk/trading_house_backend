const { Router } = require('express');

const { statusesController } = require('../controllers/status.controller');

const router = Router();

router.get('/', statusesController.getAll);
router.post('/', statusesController.createStatus);
router.patch('/:id', statusesController.editStatus);

module.exports = router;