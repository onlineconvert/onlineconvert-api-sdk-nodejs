'use strict';

var url = require('url');


var Input = require('./InputService');


module.exports.jobsJobIdInputGet = function jobsJobIdInputGet (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Input.jobsJobIdInputGet(xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputPost = function jobsJobIdInputPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Input.jobsJobIdInputPost(body, xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputFileIdGet = function jobsJobIdInputFileIdGet (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Input.jobsJobIdInputFileIdGet(xOcToken, xOcApiKey, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdInputFileIdDelete = function jobsJobIdInputFileIdDelete (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  var fileId = req.swagger.params['file_id'].value;
  

  var result = Input.jobsJobIdInputFileIdDelete(xOcToken, xOcApiKey, jobId, fileId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
