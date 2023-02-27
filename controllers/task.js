const { Router } = require('express');
const service = require('../services/task_service');
const router = Router();

router.post('/', service.createTask);

module.exports = router