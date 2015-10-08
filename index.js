"use strict";

var fs = require("fs");
var content = fs.readFileSync(process.argv[2]).toString();
var sum = 0;

content.split("\n").forEach(function (n) {
  if(n=="") {
    return;
  }
  sum+=parseInt(n, 10);
});

console.log(sum);
