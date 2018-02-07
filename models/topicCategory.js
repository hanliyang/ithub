const {query}=require('../utilities/db-helper.js');


exports.findAll=(sql,callback)=>{

	query(sql,callback);
	

}