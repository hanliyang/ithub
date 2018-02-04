const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./router');
const app = express();
//开放资源
app.use('/node_modules',express.static('./node_modules/'));
app.use('/public',express.static('./public/'));

//模板引擎
app.engine('html', require('express-art-template'));

//配置可以直接通过 req.body 来获取表单 POST 请求体数据了
app.use(bodyParser.urlencoded({ extended: false }));
// 该插件会为 req 请求对象添加一个成员：req.session 默认是一个对象
// 这是最简单的配置方式，暂且先不用关心里面参数的含义
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: true // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}));

//绑定路由容器，使其能在app应用程序中使用
app.use(router);


app.listen(3000,()=>console.log("server is running on port 3000"));




