/* 
* @Author: chaihaotian
* @Date:   2015-06-09 00:21:51
* @Last Modified by:   chaihaotian
* @Last Modified time: 2015-06-09 01:48:18
*/

'use strict';

var bayes = require('bayes');
var nodejieba = require('nodejieba');
var fs = require('fs');
var lineReader = require('line-reader')

var regex = /[\ |，|：|。|；|！|《|》|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g

var classifier = bayes({
	tokenizer: function (text) {
		return nodejieba.cut(text.replace(regex, ''));
	}
});

// load positive & negative sentence
['positive', 'negative'].forEach(function(filename){
	lineReader.eachLine(filename, function(line, last) {
		// leaning
		classifier.learn(line, filename);
	}).then(function(){
		// make the classifier to json. learning is done
		var stateJson = classifier.toJson()
		// write to file
		fs.writeFile('classifier', stateJson, function(err){
			if (err) throw err;
			console.log('Learned File ' + filename);
		})
	});
});
