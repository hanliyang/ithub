
const user = require('../models/user.js');
//引入加密文件
const md5 = require('blueimp-md5');
//渲染登录页面
exports.showSignin = (req,res) =>{

res.render('signin.html');

}
//处理登陆请求
exports.Signin = (req,res) =>{

//接受表单提交过来的数据
	const body = req.body;
	//对数据进行验证，普通数据验证，业务数据验证
	//判断用户是否存在
	user.findByEmail(body.email,(err,ret)=>{
		if(err){
			return res.status(500).json({
				error:err.message
			});
		}
//如果用户存在程序也得终止，说明用户已经存在
		if(!ret){
			return res.status(200).json({
				code:1,
				message:"email not exist"
			});
		}
		if(ret.password !== md5(body.password)){
			return res.status(200).json({
				code:2,
				message :"password error"
			});
		}
		//存储用户
		req.session.user=ret;
		return res.status(200).json({
			code:0,
			message:"success"
		})

	});
	

}
//	渲染注册页面
exports.showSignup = (req,res) =>{

res.render('signup.html');

}
//处理注册请求
exports.signup = (req,res) =>{
	//接受表单提交过来的数据
	const body = req.body;
	//对数据进行验证，普通数据验证，业务数据验证
	//判断用户是否存在
	user.findByEmail(body.email,(err,ret)=>{
		if(err){
			return res.status(500).json({
				error:err.message
			});
		}
//如果用户存在程序也得终止，说明用户已经存在
		if(ret){
			return res.status(200).json({
				code:1,
				message:"email existed"
			})
		}


	});
	
	//判断昵称是否存在
	user.findByNickname(body.nickname,(err,ret)=>{
		if(err){
			return res.status(500).json({
				error:err.message
			});
		}
//如果用户存在程序也得终止，说明用户已经存在
		if(ret){
			return res.status(200).json({
				code:2,
				message:"nickname existed"
			})
		}


	});
	//对密码进行加密
	body.password = md5(body.password);

	user.save(body,(err,ret)=>{
		if(err){
			return res.status(500).json({
				error:err.message
			});
		}
		//成功返回消息
		if(ret){
			return res.status(200).json({
				code:0,
				message:"success"
			});
		}
		//存储用户
		req.session.user={
			...body,
			id:boby.insertId
		}
	})


}
//	处理退出请求
exports.signout = (req,res) =>{

res.send('hello');

}

