'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// i: int o: n console logs identify multiples of 5 and 3 print the aproprieate string for each int between 1 and n
function fizzBuzz(n) {
    for ( let i = 3; i<n; i++){
        let toPrint = '';
        toPrint += checkMultiples(i).three ? Fizz : "";

    }
    

}
console.log(checkMultiples(5).three)

const checkMultiples = (n) => {
    const MultObj = {}
    MultObj['three'] = n % 3 === 0 ? true : false;
    MultObj['five'] = n % 5 === 0 ? true : false;
    return MultObj
}


function main() {