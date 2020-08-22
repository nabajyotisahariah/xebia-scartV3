var express = require('express');
var router = express.Router();
const request = require('request');
//import utils from '../common/utils';
const utils = require('./../common/utils');
console.log(" utils ",utils)

var util = {
  getRequest: (options) => {
      return new Promise(function(resolve, reject) {
          request.get(options, function (error, response, body) {
              if(response && response.statusCode==200) {
              return resolve({status: 1, data: JSON.parse(body)});
              }
              else {
              //return reject(new Error({status: 0, data: "No data"}));
              return resolve({status: 0, data: "No data"});
              }
          })
      })
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/validate', function(req, res, next) {  

  console.log(" req.validate ",req.body);
  var params = {
          url:'https://xebiascart.herokuapp.com/users?username=amigo',
          headers : {},
          //body : {}
    }
  util.getRequest(params).then (response => {
    //console.log(" res ",response)
    res.send(response);
  })
  
  /*request.get('https://xebiascart.herokuapp.com/users?username=amigo', function (error, response, body) {
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });*/
  
});


module.exports = router;
