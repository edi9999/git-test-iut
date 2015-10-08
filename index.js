"use strict";

var sum = 0;
var fs = require("fs");
var val = 8;
var lines = fs
  .readFileSync(process.argv[2])
  .toString()
  .split("\n");


lines.pop();

lines.forEach(function (n) {
  sum += parseInt(n, val);
});

console.log(sum);
