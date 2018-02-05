const express = require('express');



const userController = require('../controllers/user');

//获取路由对象
const router = express.Router();
//构造路由路径


//用户模块
//渲染登陆页面
router.get('/signin',userController.showSignin).post('/signin',userController.Signin)
.get('/signup',userController.showSignup).post('/signup',userController.signup)
.get('/signout',userController.signout);



//将路由应用到app.js页面
module.exports = router;
