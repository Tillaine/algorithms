
function generateHashtag (string) {
    if (string === '') { return false }
    strings = string.split(" ").filter(word =>  word !== '')        
    let tag = '#' 
    //loop through the string
    for (let i = 0; i < strings.length; i++) {
        let firstletter = strings[i].substr(0, 1).toUpperCase(); 
        let word = firstletter + strings[i].substr(1);
        tag += word;
    }
    console.log(tag)
    return tag === "#" || tag.length > 140 ? false : tag
    
  }

  generateHashtag("    bit is the greatest programmer")

//   The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false..