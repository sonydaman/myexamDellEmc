var express = require('express');
var router = express.Router();
var myResult = require("./database/api");

router.post('/',async function(req, res, next) {
    postData = req.body;
    input = { postData };
    await myResult.post(input).
          then((output)=> data = {status:true,msg:"Data added successfully !",data:{insertId:output.res.insertId,changedRows:output.res.changedRows}} ) .
          catch((e)=> data = {status:false,  msg:"Some error occured",errorDetails:{code:e.code,errno:e.errno}} );
          let statusCode = data.status ? 200 : 203;
            res.status(statusCode).send(data);
          var data,postData,input;
  });
module.exports = router;