'use strict';

exports.jobsJobIdConversionsGet = function(token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "options" : "",
  "category" : "audio",
  "target" : "mp3"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdConversionsPost = function(body, token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "options" : "",
  "category" : "audio",
  "target" : "mp3"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdConversionsConversionIdGet = function(token, key, jobId, conversionId) {

  var examples = {};
  
  examples['application/json'] = {
  "options" : "",
  "category" : "audio",
  "target" : "mp3"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdConversionsConversionIdDelete = function(token, key, jobId, conversionId) {

  var examples = {};
  
  examples['application/json'] = {
  "options" : "",
  "category" : "audio",
  "target" : "mp3"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
