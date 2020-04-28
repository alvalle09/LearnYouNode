
const fs = require('fs');

const filePath = process.argv[2];

const fileContents = fs.readFileSync(filePath, 'utf8');

console.log(fileContents);