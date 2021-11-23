//Settings for DB connection
var configs = {
    "http": {
        'static': {
            'static': true,
            'port': 80
        },
        'health': {
            'static': false,
            'port': 8001
        }
    }
};

module.exports = configs;