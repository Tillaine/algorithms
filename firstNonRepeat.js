function firstNonRepeatingLetter(s) {
    console.log(s)
    if ( s === '') { return s }  
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
          if (stringObj[chars[i]] === 1) { return s[i] } } 
    return ''
          
    }

    const result = firstNonRepeatingLetter('');
    console.log(result)