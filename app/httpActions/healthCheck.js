
//This file was automaticaly generated
//Feel free to edit :)

var HttpAction = require('../kernel/HttpAction');

class healthCheck extends HttpAction {
    async request(data) {
        return {
            status: 'ok'
        };
    }
}

let obj = new healthCheck(
    '/get',
    health
);
module.exports = obj;
