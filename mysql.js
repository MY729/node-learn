var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodelearn'
});
 
connection.connect();

//增加
var addSql = 'INSERT INTO userInfo(userId, userName) VALUES(0, ?)';
var addParams = ['林夕梦'];
connection.query(addSql, addParams, function (err, result) {
  if (err) {
    console.log('[ERROR] - ',err.message);
    return;
  }

  console.log('--------------------------add----------------------------');
  console.log(result);
  console.log('------------------------------------------------------------\n\n');  
});

// 删除
// var deleteSql = 'DELETE FROM userInfo where userId = 1048'
// connection.query(deleteSql, function (err, result) {
//   if (err) {
//     console.log('[ERROR] - ',err.message);
//     return;
//   }

//   console.log('--------------------------delete----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');  
// });

// 更新
// var updateSql = 'UPDATE userInfo SET userName = ? WHERE userId = ?'
// var updateParams = ['木木', 1050]
// connection.query(updateSql, updateParams, function (err, result) {
//   if (err) {
//     console.log('[ERROR] - ',err.message);
//     return;
//   }

//   console.log('--------------------------update----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');  
// });
 
//查找
// var  selectSql = 'SELECT * FROM userInfo';
// connection.query(selectSql, function (err, result) {
//   if (err) {
//     console.log('[ERROR] - ', err.message);
//     return;
//   }

//   console.log('--------------------------SELECT----------------------------');
//   console.log(result);
//   console.log('------------------------------------------------------------\n\n');  
// });
 
connection.end();