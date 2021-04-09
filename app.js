const express = require('express');
//const mysql = require('mysql');

//create connection
// const db = mysql.createConnection({
//     host        :   'localhost',
//     user        :   'root',
//     password    :   '123456',
//     database    :   "mydb"
// });

const app = express();
const port = 3001;

app.set("port", port);

app.get("/", (req, res) => {
    res.send("Hello world!");
  });

app.listen('3000', () => {
    console.log('Listening on', port);
})

module.exports = app;
