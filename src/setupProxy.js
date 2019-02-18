// yarn add http-proxy-middleware
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api',
        {
            target: 'http://172.16.135.58:9999/',
            // pathRewrite: {
            //     '^/api': '',
            // }
        }
    ));
};
