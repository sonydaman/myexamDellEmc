var express = require('express');
var router = express.Router();
var myResult = require("./database/api");

/* GET users listing. */
router.get('/',async function(req, res, next) {  
  await myResult.get().
        then((input)=> data = {status:true, "data":input.rows} ).
        catch((e)=> data = {status:false,  msg:"Some error occured",errorDetails:{code:e.code,errno:e.errno}} )
        let statusCode = data.status ? 200 : 203;
          res.status(statusCode).send(data);
    var data;
});
module.exports = router;