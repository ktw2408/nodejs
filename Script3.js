var url = require('url');

var urlStr = 'https://p.eagate.573.jp/game/2dx/27/djdata/status.html';

var curUrl = url.parse(urlStr);

console.dir(curUrl); //url 전체 정보 표시

console.log('query : ' + curUrl.query); //쿼리 정보

var curStr = url.format(curUrl);
console.log('url : ' + curStr); //url 정보

var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어 : ' + params.query);  //검색어 정보
