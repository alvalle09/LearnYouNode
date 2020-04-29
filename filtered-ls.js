
const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const filterExtension = `.${process.argv[3]}`;

const directoryContents = fs.readdir(directory, (error, files) => {
    const filteredFiles = files.filter(filename => { 
        const extension = path.extname(filename);
        return extension === filterExtension;
    });
    console.log(filteredFiles.join('\n'));
} );

