const { Router } = require('express');
const service = require('../services/task_service');
const router = Router();

router.post('/', service.createTask);
router.get('/', service.getTasks);


router.get('/:id', service.getTaskById);
module.exports = router