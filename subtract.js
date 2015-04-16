var curry = require("./curry");

module.exports = curry(function _subtract(x, y) {
    return x - y;
});