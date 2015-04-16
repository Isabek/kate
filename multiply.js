var curry = require("./curry");

module.exports = curry(function _multiply(x, y) {
    return x * y;
});