var http = require('http');
var fs = require('fs');
var server = http.createServer();

var host = 'localhost';
var port = 3000; //포트번호
server.listen(port, host, 50000, function(){  // port[,hostname][,backlog][,callback]
    console.log('웹서버가 실행되었습니다 : ' + host + ':' + port);
}); 

server.on('connection', function(socket){ //소켓 접속시 실행하는 이벤트
    console.log('클라이언트가 접속했습니다.')
});

server.on('request', function(req, res){ //요청-응답 부분
    console.log('클라이언트의 요청이 들어왔습니다.');
    //console.dir(req);
    var filename = 'lt_iidx28_title.jpg';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type":"image/jpg"}); //응답 헤더
        res.write('<h1>웹서버로부터 받은 응답</h1>'); //응답 본문
        res.write(data);
        res.end(); //클라이언트로 응답 전송
    });
});