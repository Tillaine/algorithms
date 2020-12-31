//take in a string and return an array of all possible permutations 
//create an object of strings 

// per(NS, string) {
    // if string = original string length && obj[string] is undefined 
        // return string 
    //else 
    // add to string 
    // loop through string 
    // create tempString TS with current letter CL removed 
    //add current letter to NS 
//send TP and NS back through  per(NS, tS)
// }
// 
function permutations(string) {
  const perms = {};
  newString = '';
  const findPerms = (ts, ns) => {
    
    if( ns.length === string.length && perms[ns] === undefined) {
         perms[ns] = ns;  
        } else {
            for( let i = 0; i < ts.length; i++ ) {
                cl = ts[i];
                tempString = ts.slice(i +1);
                ns += cl;
                for( x = 0; x < tempString.length; x++ ){
                    findPerms(tempString, ns)
                }  
                
            }
          }
      }
      
      findPerms(string, newString)
      console.log('perms', perms)
      
}

permutations('hello')