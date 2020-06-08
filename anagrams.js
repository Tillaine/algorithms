function anagrams(word, words) {
return words.filter((a) => checkWord(word, a))

}


const createObj = (word) => {
    const obj = {}
    const letters = word.split('').map(letter => {
        if (obj[letter] !== undefined) {
            obj[letter] ++;
            obj[`${letter} ${obj[letter]}`] = 1;
        } else {
            obj[letter] = 1;
        }
    })
    return obj;
}

const checkWord = (baseWord, word) => {
    if(baseWord.length === word.length) {
        const baseObj = createObj(baseWord);
        const wordObj = createObj(word);
        for(let i in baseObj) {
            if(wordObj[i] === undefined) {
                return false;
            } else {
                delete wordObj[i];
            }
        }
        return true;
    }

    
}
// console.log('true', checkWord('hello', 'hello'))
// console.log('false', checkWord('hello', 'helno'))

// w: check if any of the words are anograms of word. if so push them to new array adn return array
// eliminate obvious missmathces
// eliminate if lenght is not equal 
const result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
//  => ['aabb', 'bbaa']
console.log(result)