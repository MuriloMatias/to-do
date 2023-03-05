const { Router } = require('express');
const service = require('../services/task_service');
const router = Router();

router.post('/', service.createTask);
router.get('/', service.getTasks);
router.get('/tag', service.getTaskByTag);
router.get('/:id', service.getTaskById);
router.put('/:id', service.updateTask);
router.delete('/:id', service.deleteTask);


module.exports = router