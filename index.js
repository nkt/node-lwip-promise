var Promise = require('bluebird');
var lwip = Promise.promisifyAll(require('lwip'));

Promise.promisifyAll(require('lwip/lib/Image').prototype);
Promise.promisifyAll(require('lwip/lib/Batch').prototype);

module.exports = lwip;
