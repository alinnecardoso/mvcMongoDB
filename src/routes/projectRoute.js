const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/project', projectController.getProject);
router.post('/project', projectController.create);
router.get('/project/:id', projectController.details);
router.put('/project/:id', projectController.update);
router.delete('/project/:id', projectController.delete)

module.exports = router;
