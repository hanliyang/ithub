const Comment = require('../models/comment');

//获取话题评论列表

exports.list = (req, res, next) => {
  // /topic/168/comment?page=2&limit=1
  // 默认每页 10 条评论
  // 默认返回第 1 页
  // 一共分多少页？
  //    向上取整(总条数 / 每页大小)
  const {page = 1, limit = 10} = req.query
  const {topicId} = req.params

  Comment.getCountByTopicId(topicId, (err, count) => {
    if (err) {
      return next(err)
    }
    Comment.findByTopicId({
      page, // 页码
      limit, // 每页大小
      topicId
    }, (err, comments) => {
      if (err) {
        return next(err)
      }
      res.status(200).json({
        code: 0,
        data: comments,
        count
      })
    })
  })
}
//发表评论
exports.create = (req,res,next) => {

	//获取表单提交的值
	const {topicId} = req.params;
	const {content} = req.body;
	const userId = req.session.user.id;

	//调用模型的方法
	new Comment({
		topicId,
		content,
		userId
	}).save((err,data)=>{
		if(err){
			return next(err);
		}
		res.status(200).json({
			code:0,
			message:"success"
		});

	})

	
}
//获取编辑评论
exports.showEdit = (req,res,next) => {

res.send('发送请求');

	
}
//处理编辑评论
exports.edit = (req,res,next) => {

res.send('发送请求');

	
}

//删除评论
exports.delete = (req,res,next) => {
res.send('发送请求');

}