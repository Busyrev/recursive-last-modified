# recursive-last-modified
Walks through specified directory or directories and returns last change date of all tree. Technically it is the newest modified or created date of all files in specified dir

[Npm module](https://www.npmjs.com/package/recursive-last-modified)

Last modified date in this readme and code means newest date for each directory and file recursively from:

* [stats.birthtimeMs](https://nodejs.org/api/fs.html#fs_stats_birthtimems)
* [stats.ctimeMs](https://nodejs.org/api/fs.html#fs_stats_ctimems)
* [stats.mtimeMs](https://nodejs.org/api/fs.html#fs_stats_mtimems)


## Future plans
* node-glob syntax support  https://github.com/isaacs/node-glob
* excludes
* optional ability to skip missing paths. False by default? 
* ability to get list of files modified since specified date

## More details

You can specify not only directory, but file. And array of files and directories mixed. 

## Usage

```js
let rlm = require('recursive-last-modified');

console.log(rlm('.')) // prints last modified date of current folder and all its content

console.log(rlm(['dir1', 'dir2'])) // prints newest last modified date of dir1, dir2 and all content in them

console.log(rlm('path/to/some/file.txt')) // prints last modified date of path/to/some/file.txt
```

## Thanks

Development of the project was sponsored by [Crazy Panda](https://crazypanda.ru/)

## License
Licensed in terms of MIT license (see https://github.com/Busyrev/recursive-last-modified/blob/master/LICENSE file).
