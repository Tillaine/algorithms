function duplicateCount(text){
    const dups = {};
    let dupCount = 0;
    
    for( let i = 0; i < text.length; i++ ) {
        const item = text[i].toLowerCase();
        if (dups[item] && dups[item] === 1) {
            dups[item] ++;
            dupCount ++
        } else if (dups[item] === undefined) {
            dups[item] = 1;
        }
      }  
    
    return dupCount
    }

    const result = duplicateCount('wiiiiiIo')
    console.log('expect 1 got', result);