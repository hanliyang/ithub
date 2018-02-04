
const mysql = require('mysql');
const {dbConfig} = require('../config.js');
const pool = mysql.createPool(dbConfig);
exports.query=(...args)=>{
	
	//将最后的回调函数弹出
	let callback = args.pop();

pool.getConnection((err,connection)=>{
//第一层判断
if(err){
	return callback(err);
}
//执行查询语句,将数组转化
 connection.query(...args,(...results)=>{
 	


 	//只能放到里面因为是异步操作，可能没有读完数据库就结束了
connection.release();
//第二层判断


return callback(...results);




 
});

});
}
