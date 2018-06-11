var mydb = require('./init');
var config = require('./config');

var Results ={
    "init" : ()=>   new mydb(config),
    "get" : ()=>    new Promise((resolve,reject) => {
                        var myDb = Results.init();
                        myDb.query('SELECT num1,num2,result FROM results ORDER BY `id` DESC', function (err, rows, fields) {
                            if (err) reject(err);
                            myDb.end();
                            resolve({rows,fields});
                        });
                    }),
    "post" : (input)=>   new Promise((resolve,reject) => {
                    var myDb = Results.init();
                    myDb.query('INSERT INTO results SET ?',input.postData, function (err, res, fields) {
                        if (err) reject(err);
                        myDb.end();
                        resolve({res});            
                    });
                })
};
module.exports = Results;