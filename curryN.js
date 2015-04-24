module.exports = function curryN(n, fn) {

    if (typeof n !== "number") n = fn.length;

    function curriedN(prev) {
        return function () {
            var args = prev.concat(Array.prototype.slice.call(arguments));
            return (args.length >= n ) ? fn.apply(null, args) : curriedN(args);
        }
    }

    return curriedN([]);
};