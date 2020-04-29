
const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (error, fileContents) => {
    const lines = fileContents.split('\n');
    const newLinesCount = lines.length -1;
    console.log(newLinesCount);
})


