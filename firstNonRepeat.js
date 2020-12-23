function firstNonRepeatingLetter(s) {
    const stringObj = {};
    const chars = s.toLowerCase().split('')
    chars.forEach(letter => {
        if ( stringObj[letter] ) {
            stringObj[letter] ++
        } else {
            stringObj[letter] = 1
        }}
    )
    // return stringObj
    for(let i = 0; i < s.length; i ++ ) {
        if (stringObj[chars[i]] === 1) { return s=== "" ? "" : s[i] } } 
      
    }

    const result = firstNonRepeatingLetter('');
    console.log(result)