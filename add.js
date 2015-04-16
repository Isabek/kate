var curry = require("./curry");

module.exports = curry(function _add(x, y) {
    return x + y;
});