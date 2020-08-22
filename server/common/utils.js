const request = require('request');


const utils = {
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
    },
    A : function () {
        return "Hi,..";
    }
}

//export default utils;