var mysql = require('mysql');
var express = require('express');

// var connection = mysql.createConnection({
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "zrq_facturas",
    password: "qweqwe1",
    port: "3306"
});

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;

//     console.log('The solution is: ', rows[0].solution);
// });


pool.getConnection(function(err, connection) {
    connection.query("select * from tbl_clientes", function(err, rows) {
        if (err) {
            throw err;
        } else {
            console.log(rows);
        }
    });

    connection.release();
});


// connection.end();
