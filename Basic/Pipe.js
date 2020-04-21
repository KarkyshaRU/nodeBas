const fs = require("fs");
const zlib = require("zlib");

// **do cope file**

let readableStream = fs.createReadStream("stream.html", "utf8");

let writeableStram = fs.createWriteStream("someStream.html");

let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStram);
