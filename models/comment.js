const {query}=require('../utilities/db-helper.js');
const moment = require('moment');

//仿照面向对象的想法
 module.exports = class Comment {

//constructor是类的构造方法
	constructor({
		content,
		topicId,
		userId,
		createdAt = moment().format('YYYY-MM-DD HH:mm:ss')

	}){
		this.content = content,
		this.topicId = topicId,
		this.userId = userId,
		this.createdAt = createdAt

	}

	//创造类似的成员保存方法-save:function(){}
	save(callback){
		//const sql = 'INSERT INTO `topic_comments` SET ?';
		query('INSERT INTO `topic_comments` SET ?',this,callback);


	}
	//查询topic_comments所有的信息
	 static findAll (callback) {
    query('SELECT * FROM `topic_comments`', callback)
  }

  static findByTopicId (options, callback) {
    let {page, limit, topicId} = options
    page = page - 0
    limit = limit - 0

    // 限制最大为 100
    if (limit > 100) {
      limit = 100
    }

    const start = (page - 1) * limit
    query('SELECT * FROM `topic_comments` WHERE `topicId`=? LIMIT ?,?', [topicId, start, limit], callback)
  }

  static getCountByTopicId (id, callback) {
    query('SELECT COUNT(*) AS `count` FROM `topic_comments` WHERE `topicId`=?', [id], (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results[0].count)
    })
  }

  static findById (id, callback) {
    query('SELECT * FROM `topic_comments` WHERE `id`=?', [id], (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(null, results[0])
    })
  }
	//删去评论的方法
	
	static findByIdAndDelete (id,callback){
		query('delete from `topic_comments` where id= ?',[id],callback);
	}
		//更改评论的方法
	static findByIdAndUpdate (id,content,callback){
		query("update `topic_comments` set content=? where id=?",[content.id,id],callback);
	}
	




 }