var express = require('express');
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database("./db/manufacturingData.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    else
    console.log('Connected to the manufacturingData database.');
  });

module.exports=db;