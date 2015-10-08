"use strict";

var fs = require("fs");
var content = fs.readFileSync(process.argv[2]).toString();
var lines = content.split("\n");

lines.pop();


var sum = 0;

lines.forEach(function (n) {
  sum+=parseInt(n, 10);
});

console.log(sum);
