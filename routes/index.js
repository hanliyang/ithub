const express = require('express');


const indexController = require('../controllers/index');

//获取路由对象
const router = express.Router();
//构造路由路径

//分模块处理，利用mvc思想分发的是controllers
//渲染首页
router.get('/',indexController.showIndex);


//将路由应用到app.js页面
module.exports = router;
