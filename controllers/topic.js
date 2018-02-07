const topic = require('../models/topic.js');
const topicCategory = require('../models/topicCategory.js');
const moment = require('moment');
const marked = require('marked');
//渲染发布话题页面
exports.showCreate = (req,res,next) =>{
//从数据库中查询出所有的数据
const sql = "select * from `topic_categories`";
topicCategory.findAll(sql,(err,topicCategorys)=>{
	if(err){
		return next(err);
	}
	res.render('topic/create.html',{
		topicCategorys
	});

});


}
//处理发布请求请求
exports.create = (req,res,next) =>{
//四部曲
	const data = req.body;
//拼凑数据库所需要的数据
	const topicData={
		...data,
		userId:req.session.user.id,
		createdAt:moment().format('YYYY-MM-DD HH:mm:ss')
	}
	topic.save(topicData,(err,ret)=>{
		if(err){
			return next(err);
		}
		res.status(200).json({
			code:0,
			message:"success",
			data:{
				redirect:`/topic/${ret.insertId}`
			}
		})

	});

}
//渲染话题详情页面
exports.showDetail = (req,res,next) =>{

//获取地址栏上的分类的id

const {topicID} = req.params;
topic.findById(topicID,(err,topics)=>{
	if(err){
		return next(err);
	}
	topics && marked(topics.content);
	
 res.render('topic/show.html',{
 	topics
 });

})



}
//渲染编辑话题页面
exports.showEdit = (req,res,next) =>{
//获得传递的参数
const {topicID} = req.params;
//从数据库查询数据
topic.findById(topicID,(err,topics)=>{
	if(err){
		return next(err);
	}
	const categoryId = topics.categoryId;
	//构造sql语句
	const sql = "select * from `topic_categories`";
	topicCategory.findAll(sql,(err,topicCategorys)=>{
		if(err){
			return next(err);
		}
		res.render('topic/edit.html',{
			topics,
			topicCategorys
		});
	});


})



}
//处理编辑话题请求
exports.edit = (req,res,next) =>{
//得到传过来的id
const {topicID} = req.params;
//接收表单提交过来的数据
 const body = req.body;
//取数据库中更改数据
topic.findByIdAndUpdate(topicID,body,(err,data)=>{
	if(err){
		return next(err);
	}
	res.status(200).json({
		code:0,
		message:"success",
		data:{
			redirect:`/topic/${topicID}`
		}
	});
});

}
//处理删除话题请求
exports.delete = (req,res,next) =>{

//接受传递过来的id值
	const {topicID} = req.params;
	//用中间件进行验证
	//都通过后删除数据库
	topic.findByIdAndDelete(topicID,(err,ret)=>{
		if(err){
			return next(err);
		}
		res.status(200).json({
			code:0,
			message:"success"
		});
	})

}

