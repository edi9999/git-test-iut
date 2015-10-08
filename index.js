"use strict";

var fs = require("fs");
var val = 8;
var lines = fs
  .readFileSync(process.argv[2])
  .toString()
  .split("\n");


lines.pop();

var sum = 0;

lines.forEach(function (n) {
  sum += parseInt(n, val);
});

console.log(sum);
