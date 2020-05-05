
const mymodule = require('./mymodule');

const directory = process.argv[2];
const filterExtension = process.argv[3];


mymodule(directory, filterExtension, (error, files) => {
    if (error) {
        console.error('There was an error: ', error);
    }
    console.log(files.join('\n'));
});