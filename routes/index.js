const { Router } = require('express');

const router = Router();

router.use('/clients', require('./clients.route'));
router.use('/notes', require('./notes.route'));
router.use('/statuses', require('./statuses.route'));



module.exports = router;
