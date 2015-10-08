"use strict";

var fs = require("fs");

var content = fs.readFileSync(process.argv[2]).toString();

var sum = 0;

var splitted = content.split("\n");

splitted.forEach(function (n) {
  if(n=="") {
    return;
  }
  sum+=parseInt(n, 10);
});

console.log(sum);
