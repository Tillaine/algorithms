function inArray(array1,array2){
const results = [];
const added = {};
for( let i = 0; i < array1.length; i++) {
    for (let w = 0; w < array2.length; w++ )
        if (array2[w].includes(array1[i]) && added[array1[i]] === undefined) {
            results.push(array1[i]);
            added[array1[i]] = true;
        }
    
}
return results

  }

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["live", "strong", "arp"]
result = inArray(a1, a2)
console.log('result', result);
