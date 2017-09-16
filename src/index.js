var bigInt = require("big-integer");

module.exports = function multiply(first, second) {
var firstNum = bigInt(first);
var secondNum = bigInt(second);
 var answer = firstNum.multiply(secondNum);
 return answer.toString();
}
