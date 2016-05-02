var AV = require('leanengine');

/**
 * 引入云函数
 * @method require
 */
require('./cloud/test.js');

module.exports = AV.Cloud;
