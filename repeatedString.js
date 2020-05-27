'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
let aInString = countAs(s);
let result = 0;
//get num of As in string

result = aInString * Math.floor(n/s.length);
result =  n % s.length ? result + countAs(s.slice(0, (( n % s.length ) + 1))) : result;

return result;
}

const countAs = (s) => {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'A') {
            result ++;
        }
    }
return result;
}
debugger;


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
