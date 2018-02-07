const express = require('express');

const topicController = require('../controllers/topic');
const {checkDeleteAndEdit} = require('../middlewares/topic');
//获取路由对象
const router = express.Router();
//构造路由路径






//话题模块
router.get('/create',topicController.showCreate)
.post('/create',topicController.create)
.get('/:topicID',topicController.showDetail)
.get('/:topicID/edit',topicController.showEdit)
.post('/:topicID/edit',checkDeleteAndEdit,topicController.edit)
.post('/:topicID/delete',checkDeleteAndEdit,topicController.delete);


//将路由应用到app.js页面
module.exports = router;
