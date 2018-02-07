const topic = require('../models/topic.js');

module.exports.checkDeleteAndEdit=(req,res,next)=>{


/*exports.findById=(topicId,callback)=>{

	query('select * from topics where id= ?',[topicId],function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res[0]);
	});


}*/
	const {topicID} = req.params;
topic.findById(topicID,(err,ret)=>{
	if(err){
		return next(err)
	}
//如果用户不不存在
	if(!ret){
		return res.status(200).json({
			code:1,
			message:"该用户不存在或者已经被删除"
		});
	}
		
	if(ret.userId !== req.session.user.id){
		return res.status(200).json({
			code:2,
			message:"当前用户不是登录用户"
		});
	}


			next();





})



}