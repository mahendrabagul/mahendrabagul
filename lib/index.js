/**
 * Displays a string in the console
 *
 * @param info
 */
const print = function (info) {
    const {jsonBeautify} = require('beautify-json');
    return jsonBeautify(info);
};

// Allows us to call this function from outside of the library file.
// Without this, print function would be private to this file.
exports.print = print;
