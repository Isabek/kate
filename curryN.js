var argsToArray = require("./argsToArray");

module.exports = function curryN(n, fn) {
    return (function _curryN(n, fn, args) {
        return function () {
            var arr = args.concat(argsToArray(arguments));
            return (args.length + arguments.length >= n) ? fn.apply(null, arr) : _curryN(n, fn, arr);
        }
    })(n, fn, []);
};