const { Router } = require('express');
const service = require('../services/task_service');
const router = Router();

router.post('/', service.createTask);
router.get('/', service.getTasks);

//Corrigir 
router.get('/tag', service.getTaskByTag);

router.get('/:id', service.getTaskById);
module.exports = router