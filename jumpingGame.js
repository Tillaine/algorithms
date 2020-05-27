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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
console.log(c)
let steps = 0;
let count = 1;
while(count < c.length) {
    const next = count + 1;
    if(c[next] === 0 && next < c.length) {
        steps ++;
        count += 2;
    } else {
        steps ++;
        count ++;
    }

}
return steps;
}

const result = jumpingOnClouds([0, 0, 0, 0, 1, 0])
console.log('expected 3 and got: ', result);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
