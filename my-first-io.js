
import { readFileSync } from 'fs';

const filePath = process.argv[2];

const fileContents = readFileSync(filePath, 'utf8');

//console.log(fileContents);

const lines = fileContents.split('\n');
const newLinesCount = lines.length -1;

console.log(newLinesCount);