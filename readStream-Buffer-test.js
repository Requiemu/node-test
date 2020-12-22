var fs = require('fs');

var rs = fs.createReadStream('sample.txt', { highWaterMark: 11 });
var data = '';
setTimeout(() => {
    rs.setEncoding('utf-8')
    rs.on("data", function (chunk) {
        data += chunk;
    })
    rs.on("end", function () {
        console.log(data)
    })
}, 1000);
