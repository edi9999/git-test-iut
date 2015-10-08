"use strict";

var fs = require("fs");
var content = fs.readFileSync(process.argv[2]).toString();
var val = 8;
var lines = content.split("\n");

lines.pop();


var sum = 0;

lines.forEach(function (n) {
  sum+=parseInt(n, val);
});

console.log(sum);
