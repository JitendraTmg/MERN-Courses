const { jsx } = require("react/jsx-runtime");

var a = 23;
var b = 12;
var condition1 = a > b;
var condition2 = a > 10;

var result1 = condition1 && condition2;
console.log("result of AND (&&): " + result1);

var result2 = condition1 || condition2;
console.log("result of OR (||): " + result2);

var result3 = !condition1;
console.log("result of NOT (!): " + result3);
