const log = console.log;
const chalk = require('chalk');
const fs = require('fs');

log(chalk.cyan('请输入新页面的名称:'));
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {

    var chunk = process.stdin.read(); // 获取到输入的信息

    if (typeof chunk === 'string') {
        let temp_chunk = chunk;

        chunk = chunk.slice(0, -2); // 这个是利用切片，切掉我们的回车\n

        if (chunk !== null && chunk.length > 0) {
            process.stdout.write('新建页面是:' + temp_chunk);
            // 创建文件中
        }
    }

    if (chunk === '') {
        process.stdin.emit('end'); // 触发end事件
        return
    }

});

process.stdin.on('end', function () {
    log(chalk.cyan('页面已新建!'));
});


