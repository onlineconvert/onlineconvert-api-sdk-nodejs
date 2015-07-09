'use strict';

var url = require('url');


var Information = require('./InformationService');


module.exports.conversionsGet = function conversionsGet (req, res, next) {
  var category = req.swagger.params['category'].value;
  var target = req.swagger.params['target'].value;
  var page = req.swagger.params['page'].value;
  

  var result = Information.conversionsGet(category, target, page);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.statusesGet = function statusesGet (req, res, next) {
  

  var result = Information.statusesGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
