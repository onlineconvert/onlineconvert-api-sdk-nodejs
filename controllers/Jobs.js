'use strict';

var url = require('url');


var Jobs = require('./JobsService');


module.exports.jobsGet = function jobsGet (req, res, next) {
  var status = req.swagger.params['status'].value;
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var page = req.swagger.params['page'].value;
  

  var result = Jobs.jobsGet(status, xOcToken, xOcApiKey, page);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsPost = function jobsPost (req, res, next) {
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Jobs.jobsPost(xOcApiKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdGet = function jobsJobIdGet (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdGet(xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdDelete = function jobsJobIdDelete (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdDelete(xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdPatch = function jobsJobIdPatch (req, res, next) {
  var body = req.swagger.params['body'].value;
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdPatch(body, xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdThreadsGet = function jobsJobIdThreadsGet (req, res, next) {
  var xOcToken = req.swagger.params['X-Oc-Token'].value;
  var xOcApiKey = req.swagger.params['X-Oc-Api-Key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdThreadsGet(xOcToken, xOcApiKey, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
