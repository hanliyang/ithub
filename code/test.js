const express = require('express');
const path = require('path');
const fs = require('fs');
//引用中间件
const app = express();

//所有的路径都通过这里
/*app.use((req,res,next) => {
	console.log(`${req.method}--${req.path}`);
	
	next();//路径下移，找到对应方法和路径的中间件进行反应

})

app.get('/',(req,res) =>{

res.send('hello');/**/

/*})

app.get('/admin',(req,res) =>{

res.send('world');

})
*/

//模拟app.use('/public',express.static('./public/'));
const paths = path.join(__dirname,'public');
app.use('/public',static(paths));
//构造函数
function static(filePath){

return (req,res,next)=>{

	
	const staticPath = path.join(filePath,req.path);
	fs.readFile(staticPath,'utf8',(err,data)=>{
		if(err){
			return next();
		}
		console.log(data);
		res.end(data);
		
	});
}


}





module.exports=app;