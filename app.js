const express = require('express');
const app = express();
const router = require('./router');
//开放资源
app.use('/node_modules',express.static('./node_modules/'));
app.use('/public',express.static('./public/'));
//绑定路由容器，使其能在app应用程序中使用
app.use(router);


app.listen(3000,()=>console.log("server is running on port 3000"));




