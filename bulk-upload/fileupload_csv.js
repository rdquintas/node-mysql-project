var fs = require('fs');
var csv = require('csv');

// opts is optional
// var opts = ;

csv()
    .from.path(__dirname + '/file.csv', {
        delimiter: '	',
        escape: '"'
    })
    .to.stream(fs.createWriteStream(__dirname + '/sample.out'))
    .transform(function(row, index) {
        return "campo1:" + row[0] + ",campo2:" + row[2] + ",campo3:" + row[1];
        // row.unshift(row.pop());
        // return row;
    })
    .on('record', function(row, index) {
        console.log('#' + index + ' ' + JSON.stringify(row));
    })
    .on('close', function(count) {
        // when writing to a file, use the 'close' event
        // the 'end' event may fire before the file has been written
        console.log('Number of lines: ' + count);
    })
    .on('error', function(error) {
        console.log(error.message);
    });
