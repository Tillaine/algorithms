function titleCase(title, minorWords) {
  const titleArray = title.split(' ')
  const minorArray = minorWords.split(' ')
  let result = convertWord(minorArray[0], null)
  
  for (i = 1; i < titleArray.length; i++) {
      result += ' ' + convertWord(titleArray[i], minorArray) 
  }
  //loop through title array from [1] converting non minor words 
    //and adding them to result string
// return result string 

return result;


}

const convertWord = (word, minorWords) => {
    if (minorWords !== null && minorWords.includes(word)) {
       return word; 
    } else {
        let first = word[0].toUpperCase();
        let end = word.slice(1, word.length).toLowerCase()
        return first + end;
    }
}

console.log(titleCase('a clash of KINGS', 'a an the of'))


