const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '123456',
    database    :   "mydb"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("SELECT * FROM customers", function (err, result) {
      if (err) throw err;
      console.log(result[0].name);
    });
  });


// app.listen('3000', () => {
//     console.log('Server started on port 3000');
// })