var curry = require("./curry");
var add = require("./add");

module.exports = curry(function _sum(arr) {
    return arr.reduce(add, 0);
});