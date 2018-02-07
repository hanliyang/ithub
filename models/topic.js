const {query}=require('../utilities/db-helper.js');


//验证昵称的方法
exports.findById=(topicId,callback)=>{

	query('select * from topics where id= ?',[topicId],function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res[0]);
	});


}
//删除数据库
exports.findByIdAndDelete = (topicId,callback)=>{
		query('delete from topics where id= ?',[topicId],callback);
}
//保存到数据库中
exports.save=(body,callback)=>{
	
	query('insert into topics set ?',body,function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res);
	});


}
exports.findByIdAndUpdate = (topicId,body,callback)=>{
	query("update `topic` set categoryId=? title=? content=? where id=?",[body.categoryId,body.title,body.content,topicId],callback);
}