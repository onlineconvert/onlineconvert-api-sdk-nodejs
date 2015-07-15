'use strict';

exports.jobsJobIdInputGet = function(xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "created_at" : "2015-07-15T15:11:53.290+0000",
  "filename" : "image.png",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.290+0000",
  "size" : "12835187"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputPost = function(body, xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "created_at" : "2015-07-15T15:11:53.296+0000",
  "filename" : "image.png",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.296+0000",
  "size" : "12835187"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputFileIdGet = function(xOcToken, xOcApiKey, jobId, fileId) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "created_at" : "2015-07-15T15:11:53.298+0000",
  "filename" : "image.png",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.298+0000",
  "size" : "12835187"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputFileIdDelete = function(xOcToken, xOcApiKey, jobId, fileId) {

  var examples = {};
  
  examples['application/json'] = {
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "created_at" : "2015-07-15T15:11:53.307+0000",
  "filename" : "image.png",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.307+0000",
  "size" : "12835187"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
