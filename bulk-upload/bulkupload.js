var mysql = require('mysql');
var express = require('express');
var _ = require('underscore');
var randy = require('randy');
var count = 1000000;
// var connection = mysql.createConnection({
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "zrq_facturas",
    password: "qweqwe1",
    port: "3306"
});



// Query base.
var sql = 'INSERT INTO zrqtabela (' +
    'id,' +
    'title,' +
    'nr1,' +
    'nr2' +
    ') VALUES';

// Create records.
_(count).times(function(n) {

    // Get random point coordinates and radius.
    var lat = randy.randInt(-20000000, 20000000);
    var lon = randy.randInt(-20000000, 20000000);
    var color = "color";
    var zoom = "zoom";
    var geo = 'GeomFromText("POINT(' + lon + ' ' + lat + ')")';
    var rad = randy.randInt(10, 100);

    // Values.
    sql += '(' +
        '"' + n + '",' +
        '"titalo ' + n + '",' +
        rad + ',' +
        rad +
        ')';

    // Comma, except for last.
    if (n != count - 1) sql += ',';

});

// client.query(sql);
// console.log("sql: " + sql);

pool.getConnection(function(err, connection) {
    connection.query(sql, function(err, rows) {
        // connection.query("select * from tbl_clientes", function(err, rows) {
        if (err) {
            throw err;
        } else {
            console.log(rows);
        }
    });

    connection.release();
});
