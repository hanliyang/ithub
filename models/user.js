const {query}=require('../utilities/db-helper.js');

//构造验证业务数据的方法
exports.findByEmail=(email,callback)=>{

	query('select * from users where email= ?',[email],function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res[0]);
	});


}
//验证昵称的方法
exports.findByNickname=(nickname,callback)=>{

	query('select * from users where nickname= ?',[nickname],function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res[0]);
	});


}
//保存到数据库中

exports.save=(body,callback)=>{
	body.createdAt=null;
	query('insert into users set ?',body,function(err,res){
		if(err){
			return callback(err);
		}
		return callback(null,res);
	});


}