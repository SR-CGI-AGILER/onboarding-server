const dbConnection = require('../../db-connection/mysql');

function getData(){
   return new Promise(function(resolve, rejecct) {

       dbConnection.connection.query('select * from test_user',(error, results, fields)=>{
           resolve(results);
       });
   })
    
}

function addRecord(email,name,profilePic){
    return new Promise(function(resolve, reject){
        var newUserRecord = {email:email, name:name, profilePic:profilePic};
        var query = dbConnection.connection.query('INSERT INTO test_user SET ?', 
                    newUserRecord, function(error, results, fields){
                        if(error) throw error;
                    });
        // console.log(newUserRecord);
        // console.log('==========');
        // // console.log('function call',email);
        // dbConnection.connection
        //     .query('insert into test_user email=?, name=?, profilePic=?',email,name,profilePic,
        //         function(error,results,fields){
        //             if(error) throw error;
        //         });
        });
}
module.exports = {
   getData,
   addRecord
}