'use strict';

var url = require('url');


var Output = require('./OutputService');


module.exports.jobsJobIdOutputGet = function jobsJobIdOutputGet (req, res, next) {
  var conversionId = req.swagger.params['conversion_id'].value;
  var inputId = req.swagger.params['input_id'].value;
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Output.jobsJobIdOutputGet(conversionId, inputId, token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdOutputFileIdGet = function jobsJobIdOutputFileIdGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Output.jobsJobIdOutputFileIdGet(token, key, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdOutputFileIdDelete = function jobsJobIdOutputFileIdDelete (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Output.jobsJobIdOutputFileIdDelete(token, key, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
