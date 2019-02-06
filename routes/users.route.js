const express= require('express');
const router = express.Router();

const user_controller = require('../controllers/users.controller');

router.post('/create',user_controller.create);
router.post('/login',user_controller.login);
module.exports=router;
