const { Router } = require('express');

const { clientsController } = require('../controllers/clients.controller');

const router = Router();

router.get('/', clientsController.getAll);
router.get('/:id', clientsController.getClientById);
router.post('/', clientsController.createClient);
router.delete('/:id', clientsController.removeClient);
router.patch('/:id', clientsController.editClient);

module.exports = router;
