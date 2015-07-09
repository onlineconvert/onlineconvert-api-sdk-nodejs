'use strict';

exports.jobsGet = function(status, token, key, page) {

  var examples = {};
  
  examples['application/json'] = [ {
  "input" : [ {
    "filename" : "image.png",
    "size" : "12835187",
    "created_at" : "2015-07-08T13:32:03.975+0000",
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "type" : "aeiou",
    "modified_at" : "2015-07-08T13:32:03.975+0000"
  } ],
  "server" : "api5//www.online-convert.com",
  "process" : true,
  "test" : true,
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-08T13:32:03.975+0000",
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:03.975+0000",
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "conversion" : [ {
    "options" : "",
    "category" : "audio",
    "target" : "mp3"
  } ]
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsPost = function(key, body) {

  var examples = {};
  
  examples['application/json'] = {
  "input" : [ {
    "filename" : "image.png",
    "size" : "12835187",
    "created_at" : "2015-07-08T13:32:03.982+0000",
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "type" : "aeiou",
    "modified_at" : "2015-07-08T13:32:03.982+0000"
  } ],
  "server" : "api5//www.online-convert.com",
  "process" : true,
  "test" : true,
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-08T13:32:03.982+0000",
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:03.982+0000",
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "conversion" : [ {
    "options" : "",
    "category" : "audio",
    "target" : "mp3"
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdGet = function(token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "input" : [ {
    "filename" : "image.png",
    "size" : "12835187",
    "created_at" : "2015-07-08T13:32:03.986+0000",
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "type" : "aeiou",
    "modified_at" : "2015-07-08T13:32:03.986+0000"
  } ],
  "server" : "api5//www.online-convert.com",
  "process" : true,
  "test" : true,
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-08T13:32:03.986+0000",
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:03.986+0000",
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "conversion" : [ {
    "options" : "",
    "category" : "audio",
    "target" : "mp3"
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdDelete = function(token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "input" : [ {
    "filename" : "image.png",
    "size" : "12835187",
    "created_at" : "2015-07-08T13:32:03.990+0000",
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "type" : "aeiou",
    "modified_at" : "2015-07-08T13:32:03.990+0000"
  } ],
  "server" : "api5//www.online-convert.com",
  "process" : true,
  "test" : true,
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-08T13:32:03.990+0000",
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:03.990+0000",
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "conversion" : [ {
    "options" : "",
    "category" : "audio",
    "target" : "mp3"
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdPatch = function(body, token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = {
  "input" : [ {
    "filename" : "image.png",
    "size" : "12835187",
    "created_at" : "2015-07-08T13:32:03.993+0000",
    "id" : "43",
    "source" : "http://www.dropbox.com/f/sfasdfhasdjkr434fadf",
    "type" : "aeiou",
    "modified_at" : "2015-07-08T13:32:03.993+0000"
  } ],
  "server" : "api5//www.online-convert.com",
  "process" : true,
  "test" : true,
  "callback" : "http://www.mysite.com/callback",
  "created_at" : "2015-07-08T13:32:03.993+0000",
  "id" : "1b8bb2649c090df97fa1e2658e9722d1",
  "type" : "aeiou",
  "modified_at" : "2015-07-08T13:32:03.993+0000",
  "token" : "12srxin63mgp23f8mtny2rgtgl1nl39i",
  "status" : {
    "code" : "processing",
    "info" : "The file is being processed."
  },
  "conversion" : [ {
    "options" : "",
    "category" : "audio",
    "target" : "mp3"
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.jobsJobIdThreadsGet = function(token, key, jobId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "created_at" : "2015-07-08T13:32:04.022+0000",
  "modified_at" : "2015-07-08T13:32:04.022+0000",
  "hash" : "aeiou",
  "status" : 123,
  "info" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
