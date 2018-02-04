




//构造首页，处理函数
//
exports.showIndex = (req,res)=>{

	res.render("index.html",{
		user:req.session.datas
	});
}