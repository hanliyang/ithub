const express = require('express');
//获取路由对象
const router = express.Router();


//构造路由路径
//渲染首页
router.get('/',(req,res)=>{
	res.send('nihao');

});
//渲染登陆页面
router.get('/signin',(req,res)=>{
res.send('wohao');

});
//处理登陆请求
router.post('/signin',(req,res)=>{


});
//渲染注册页面
router.get('/signup',(req,res)=>{


});
//处理注册请求
router.post('/signup',(req,res)=>{


});
//处理退出请求
router.get('/signout',(req,res)=>{


});

//将路由应用到app.js页面
exports.router = router;
