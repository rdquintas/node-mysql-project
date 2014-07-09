// var fs = require('fs');
// var uri = "C:\\nDropbox\nWork\n#StartMeUp\n0repos\nnodeMySQL\";
// fs.readFile('/etc/hosts', 'utf8', function(err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });


var fs = require('fs');
// fs.open('file.txt', 'r', function(err, fd) {
//     if (err) throw err;
//     var readBuffer = new Buffer(1024),
//         bufferOffset = 0,
//         bufferLength = readBuffer.length,
//         filePosition = 100;

//     fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
//         function(err, readBytes) {
//             if (err) throw err;
//             console.log('just read ' + readBytes + ' bytes');
//             if (readBytes > 0) {
//                 console.log(readBuffer.slice(0, readBytes));
//             }
//         });
// });


var fs = require('fs');
var filename = 'file.txt';
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log(data);
});
