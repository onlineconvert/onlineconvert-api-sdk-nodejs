'use strict';

var url = require('url');


var Jobs = require('./JobsService');


module.exports.jobsGet = function jobsGet (req, res, next) {
  var status = req.swagger.params['status'].value;
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var page = req.swagger.params['page'].value;
  

  var result = Jobs.jobsGet(status, token, key, page);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsPost = function jobsPost (req, res, next) {
  var key = req.swagger.params['key'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Jobs.jobsPost(key, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdGet = function jobsJobIdGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdGet(token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdDelete = function jobsJobIdDelete (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdDelete(token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdPatch = function jobsJobIdPatch (req, res, next) {
  var body = req.swagger.params['body'].value;
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdPatch(body, token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.jobsJobIdThreadsGet = function jobsJobIdThreadsGet (req, res, next) {
  var token = req.swagger.params['token'].value;
  var key = req.swagger.params['key'].value;
  var jobId = req.swagger.params['job_id'].value;
  

  var result = Jobs.jobsJobIdThreadsGet(token, key, jobId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
