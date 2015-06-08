/* 
* @Author: chaihaotian
* @Date:   2015-06-09 00:55:05
* @Last Modified by:   chaihaotian
* @Last Modified time: 2015-06-09 01:48:38
*/

'use strict';

var fs = require('fs');
var bayes = require('bayes');

var classifier = fs.readFile('classifier', function(err, data){
	if (err) return console.log('Leaning File Not Found');
	var revivedClassifier = bayes.fromJson(data);
	var result = revivedClassifier.categorize('我是一個普通的打字员，每天我都會花很多時間在手機和電腦上。我每天只掙100~300。');
	console.log(result);
})