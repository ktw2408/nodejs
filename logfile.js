var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file'); //매일 로그 파일 기록
var moment = require('moment');

function timeStampFormat() {
    return moment().format('yyyy-mm-dd  hh:mm:ss.sss zz');
}


var logger = new (winston.logger)({

    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server',
            datapattern: '_yyyy-mm-dd.log',
            colorrize: false,
            maxsize: 50000000, //최대 허용 사이즈 → 허용 사이즈를 초과하게 되면 새로운 파일이 생기고 maxFiles만큼 생성된다.
            maxFiles: 1000, //최대 파일 개수
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),


        /* logger debug */
        new (winston.transports.Console)({
            name: 'debug-console',
            colorrize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

logger.debug('디버깅 메세지입니다,');
logger.error('에러 메세지입니다.');