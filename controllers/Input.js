'use strict';

var url = require('url');


var Input = require('./InputService');


module.exports.jobsJobIdInputGet = function jobsJobIdInputGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Input.jobsJobIdInputGet(token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputPost = function jobsJobIdInputPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Input.jobsJobIdInputPost(body, token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputFileIdGet = function jobsJobIdInputFileIdGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Input.jobsJobIdInputFileIdGet(token, key, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputFileIdDelete = function jobsJobIdInputFileIdDelete (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Input.jobsJobIdInputFileIdDelete(token, key, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
