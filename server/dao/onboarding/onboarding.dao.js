const dbConnection = require('../../db-connection/mysql');

function getData(){
   return new Promise(function(resolve, rejecct) {

       dbConnection.connection.query('select id,name from test',(error, results, fields)=>{
           resolve(results)
       });
   })
    
}
module.exports = {
   getData
}