'use strict';

exports.conversionsGet = function(category, target, page) {

  var examples = {};
  
  examples['application/json'] = [ {
  "options" : "",
  "category" : "audio",
  "target" : "mp3"
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
