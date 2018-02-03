//渲染登录页面
exports.showSignin = (req,res) =>{

res.render('signin.html');

}
//处理登陆请求
exports.Signin = (req,res) =>{

res.send('hello');

}
//	渲染注册页面
exports.showSignup = (req,res) =>{

res.render('signup.html');

}
//处理注册请求
exports.signup = (req,res) =>{

res.send('hello');

}
//	处理退出请求
exports.signout = (req,res) =>{

res.send('hello');

}

