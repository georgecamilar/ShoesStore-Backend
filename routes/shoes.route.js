const express = require('express');
const router = express.Router();

//MUST CREATE CONTROLLER
const shoes_controller = require('../controllers/shoes.controller');

router.post('/create',shoes_controller.create);
router.get('/test',shoes_controller.test);
router.get('/preview',shoes_controller.preview);
router.get('/:id',shoes_controller.shoesDetails);
router.put('/:id/update',shoes_controller.shoes_update);
router.delete('/:id/delete',shoes_controller.shoes_delete)
module.exports = router;
