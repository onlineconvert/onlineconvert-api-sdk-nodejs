'use strict';

var url = require('url');


var Conversion = require('./ConversionService');


module.exports.jobsJobIdConversionsGet = function jobsJobIdConversionsGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Conversion.jobsJobIdConversionsGet(token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdConversionsPost = function jobsJobIdConversionsPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Conversion.jobsJobIdConversionsPost(body, token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdConversionsConversionIdGet = function jobsJobIdConversionsConversionIdGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var conversionId = req.swagger.params['conversion_id'].value;
  

  var result = Conversion.jobsJobIdConversionsConversionIdGet(token, key, jobId, conversionId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdConversionsConversionIdDelete = function jobsJobIdConversionsConversionIdDelete (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var conversionId = req.swagger.params['conversion_id'].value;
  

  var result = Conversion.jobsJobIdConversionsConversionIdDelete(token, key, jobId, conversionId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
