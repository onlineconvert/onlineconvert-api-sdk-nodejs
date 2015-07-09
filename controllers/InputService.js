'use strict';

exports.jobsJobIdInputGet = function(token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "filename" : "image.png",
  "size" : "12835187",
  "created_at" : "2015-07-08T13:32:04.007+0000",
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:04.007+0000"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputPost = function(body, token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "filename" : "image.png",
  "size" : "12835187",
  "created_at" : "2015-07-08T13:32:04.009+0000",
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:04.009+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputFileIdGet = function(token, key, jobId, fileId) {

  var examples = {};
  
  examples['application/json'] = {
  "filename" : "image.png",
  "size" : "12835187",
  "created_at" : "2015-07-08T13:32:04.011+0000",
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:04.011+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdInputFileIdDelete = function(token, key, jobId, fileId) {

  var examples = {};
  
  examples['application/json'] = {
  "filename" : "image.png",
  "size" : "12835187",
  "created_at" : "2015-07-08T13:32:04.012+0000",
  "id" : "43",
  "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:04.012+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
