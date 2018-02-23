
const topic = require('../models/topic.js');
const topicCategory = require('../models/topicCategory.js');



//构造首页，处理函数
//
exports.showIndex = (req,res,next)=>{
	let {categoryId} = req.query;
	
	//转化成数字
	categoryId = parseInt(categoryId);

	//对topicId进行判断
	//如果不存在
	if(!categoryId){
		// 查询所有的分类
		const sql1 = "select * from `topic_categories`";
		const sql2 = "select * from `topics`";
		topicCategory.findAll(sql1,(err,topicCategorys)=>{

			if(err){
				return next(err);
			}

			//查询所有的话题
			topicCategory.findAll(sql2,(err,topics)=>{
				if(err){
					return next(err);
				}

				res.render('index.html',{
					topicCategorys,
					topics,
					categoryId
				});
			});


		});


	}else{

	// 查询所有的分类
		const sql1 = "select * from `topic_categories`";
		const sql2 = "select * from `topics` where categoryId="+categoryId;
		topicCategory.findAll(sql1,(err,topicCategorys)=>{

			if(err){
				return next(err);
			}
			//查询所有的话题
			topicCategory.findAll(sql2,(err,topics)=>{
				if(err){
					return next(err);
				}
				res.render('index.html',{
					topicCategorys,
					topics,
					categoryId
				});
			});


		});



	}
	// res.render("index.html");
}