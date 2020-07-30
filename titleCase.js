function titleCase(title, minorWords) {
  if(title === '') {
    return title;
  }
    const titleArray = title.toLowerCase().split(' ')
    const minorArray = minorWords ? minorWords.toLowerCase().split(' ') : '';
    let result = convertWord( titleArray[0], minorArray )

    for (i = 1; i < titleArray.length; i++) {
        result += ' ' + convertWord(titleArray[i], minorArray, true) 
    }
    return result;
  
}

const convertWord = (word, minorWords, firstLetter) => {
    if ( minorWords.includes(word) && firstLetter === true ) {
       return word; 
    } else {
        let first = word[0].toUpperCase();
        let end = word.slice(1, word.length)
        return first + end;
    }
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))


