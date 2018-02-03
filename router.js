const express = require('express');


const indexController = require('./controllers/index');
const userController = require('./controllers/user');
const topicController = require('./controllers/topic');
const commentController = require('./controllers/comment');
//获取路由对象
const router = express.Router();
//构造路由路径

//分模块处理，利用mvc思想分发的是controllers
//渲染首页
router.get('/',indexController.showIndex);


//用户模块
//渲染登陆页面
router.get('/signin',userController.showSignin).post('/signin',userController.Signin)
.get('/signup',userController.showSignup).post('/signup',userController.signup)
.get('/signout',userController.signout);

//话题模块
router.get('/topic/create',topicController.showCreate)
.post('/topic/create',topicController.create)
.get('/topic/:topicID',topicController.showDetail)
.get('/topic/:topicID/edit',topicController.showEdit)
.post('/topic/:topicID/edit',topicController.edit)
.post('/topic/:topicID/delete',topicController.delete);


//将路由应用到app.js页面
module.exports = router;
