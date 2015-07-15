'use strict';

exports.conversionsGet = function(category, target, page) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : "8daae6d1-26e0-11e5-b2a1-0800273b325b",
  "category" : "audio",
  "target" : "mp3",
  "options" : ""
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.statusesGet = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "code" : "processing",
  "info" : "The file is being processed."
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
