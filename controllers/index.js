
const topic = require('../models/topic.js');
const topicCategory = require('../models/topicCategory.js');



//构造首页，处理函数
//
exports.showIndex = (req,res,next)=>{
	let topicId = req.query;
	console.log(topicId);
	res.send('你好');
	// res.render("index.html");
}