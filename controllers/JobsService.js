'use strict';

exports.jobsGet = function(status, xOcToken, xOcApiKey, page) {

  var examples = {};
  
  examples['application/json'] = [ {
  "process" : true,
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "input" : [ {
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "created_at" : "2015-07-15T15:11:53.203+0000",
    "filename" : "image.png",
    "type" : "aeiou",
    "modified_at" : "2015-07-15T15:11:53.203+0000",
    "size" : "12835187"
  } ],
  "conversion" : [ {
    "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
    "category" : "audio",
    "target" : "mp3",
    "options" : ""
  } ],
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-15T15:11:53.203+0000",
  "server" : "api5//www.online-convert.com",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.203+0000"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsPost = function(xOcApiKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "process" : true,
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "input" : [ {
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "created_at" : "2015-07-15T15:11:53.212+0000",
    "filename" : "image.png",
    "type" : "aeiou",
    "modified_at" : "2015-07-15T15:11:53.212+0000",
    "size" : "12835187"
  } ],
  "conversion" : [ {
    "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
    "category" : "audio",
    "target" : "mp3",
    "options" : ""
  } ],
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-15T15:11:53.212+0000",
  "server" : "api5//www.online-convert.com",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.212+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdGet = function(xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "process" : true,
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "input" : [ {
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "created_at" : "2015-07-15T15:11:53.225+0000",
    "filename" : "image.png",
    "type" : "aeiou",
    "modified_at" : "2015-07-15T15:11:53.225+0000",
    "size" : "12835187"
  } ],
  "conversion" : [ {
    "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
    "category" : "audio",
    "target" : "mp3",
    "options" : ""
  } ],
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-15T15:11:53.225+0000",
  "server" : "api5//www.online-convert.com",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.225+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdDelete = function(xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "process" : true,
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "input" : [ {
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "created_at" : "2015-07-15T15:11:53.234+0000",
    "filename" : "image.png",
    "type" : "aeiou",
    "modified_at" : "2015-07-15T15:11:53.234+0000",
    "size" : "12835187"
  } ],
  "conversion" : [ {
    "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
    "category" : "audio",
    "target" : "mp3",
    "options" : ""
  } ],
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-15T15:11:53.234+0000",
  "server" : "api5//www.online-convert.com",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.234+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdPatch = function(body, xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "process" : true,
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "input" : [ {
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "created_at" : "2015-07-15T15:11:53.244+0000",
    "filename" : "image.png",
    "type" : "aeiou",
    "modified_at" : "2015-07-15T15:11:53.244+0000",
    "size" : "12835187"
  } ],
  "conversion" : [ {
    "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
    "category" : "audio",
    "target" : "mp3",
    "options" : ""
  } ],
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-15T15:11:53.244+0000",
  "server" : "api5//www.online-convert.com",
  "type" : "aeiou",
  "modified_at" : "2015-07-15T15:11:53.244+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdThreadsGet = function(xOcToken, xOcApiKey, jobId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "status" : 123,
  "hash" : "aeiou",
  "created_at" : "2015-07-15T15:11:53.323+0000",
  "modified_at" : "2015-07-15T15:11:53.323+0000",
  "info" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
