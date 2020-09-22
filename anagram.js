const { string } = require("yargs");

function anagram(str1, str2) {
    // i: two strings o: boolean w: determine if two strings are annograms
    if (str1.length !== str2.length) {return false}
    const strObj1 = createFreqCounter(str1)
    const strObj2 = createFreqCounter(str2)
    
    for (let i in strObj1) {
        if (strObj1[i] !== strObj2[i]) {
            return false
        }
    }

    return true;

}

const createFreqCounter = (string) => {
    const str = string.slice(0, string.length).toLowerCase()
    const freqObj = {}
    for ( let i = 0 ; i < str.length; i++ ) {
        freqObj[str[i]] ? freqObj[str[i]] ++ 
        : freqObj[str[i]] = 1;
    }
    return freqObj;
}

console.log(anagram('', ''))
// subsetA(arr)