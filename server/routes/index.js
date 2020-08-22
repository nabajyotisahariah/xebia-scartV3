var express = require('express');
var router = express.Router();
//import request from 'request';
const request = require('request');

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product/listing', function(req, res, next) {  

  util.getRequest({url:'https://xebiascart.herokuapp.com/products'}).then (response => {
    //console.log(" res ",response)
    res.send(response);
  })

  /*request.get('https://xebiascart.herokuapp.com/products', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received    
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });*/
  
});

router.get('/product/filter', function(req, res, next) {  

  util.getRequest({url:'https://xebiascart.herokuapp.com/filters'}).then (response => {
    //console.log(" res ",response)
    res.send(response);
  })

  /*request.get('https://xebiascart.herokuapp.com/filters', function (error, response, body) {
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });*/
  
});


router.get('/product/search', function(req, res, next) {  
  var key = 'a';
  
  util.getRequest({url:'https://xebiascart.herokuapp.com/products?title='+key}).then (response => {
    //console.log(" res ",response)
    res.send(response);
  })


  /*
  request.get('https://xebiascart.herokuapp.com/products?title='+key, function (error, response, body) {
    if(response && response.statusCode==200) {
      res.send(body)
    }
    else {
      res.send("Error")
    }     
  });*/
  
});




module.exports = router;
