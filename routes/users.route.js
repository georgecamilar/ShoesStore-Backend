const express= require('express');
const router = express.Router();

const user_controller = require('../controllers/users.controller');

router.get('/test',user_controller.test)

//post with signup
router.post('/signUp',user_controller.signUp);

//get with login
router.post('/login',user_controller.login);
router.post('/test_data',user_controller.test_data);
module.exports=router;
