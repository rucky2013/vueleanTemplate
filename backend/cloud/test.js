var AVE = require('leanengine');
//var AVSDK = require('avoscloud-sdk');
//AVSDK.initialize('HDnTL7IzCNwcealyO38S10se-gzGzoHsz', 'SnVPjvrzXnIaT1wQjIqQdUao');


AVE.Cloud.define('test', function(request, response) {
  response.success('Test Cloud Test!');
});
