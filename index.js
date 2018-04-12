/**
 * Walks through specified directory or directories and returns last change date of all tree.
 * Tecnically it is the newest modified or created date of all files and dirs in specified dir.
 * @param {string|Array.<string>} title - The title of the book.
 */
module.exports = function recursiveLastModified(dir) {
    if (Array.isArray(dir)) {
        return Math.max.apply(null, dir.map(d => {
            checkArg(d);
            return getLastModifiedRecursive(d);
        }
        ));
    } else {
        return getLastModifiedRecursive(p);
    }

    function checkArg(dir) {
        if (typeof dir == 'string') {
            throw new Error('Only string or array of string supported in parameter');
        }
    }
    let path = require('path');
    let fs = require('fs');


    function getLastModifiedRecursive(candidate) {
        let stats = fs.statSync(candidate);
        let candidateTimes = [stats.mtimeMs, stats.ctimeMs, stats.birthtimeMs];
        if (stats.isDirectory()) {
            let files = fs.readdirSync(candidate);
            candidateTimes = candidateTimes.concat(files.map(f => getLastModifiedRecursive(path.join(candidate, f))));
        }
        return Math.max.apply(null, candidateTimes);
    }
}