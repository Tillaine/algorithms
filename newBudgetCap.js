function findGrantsCap(grantsArray, newBudget) {
    let largGrants = 0;
    const avg = newBudget/grantsArray.length
    let smallGrantTotal = 0;
    for (let i = 0; i < grantsArray.length; i++) {
        if (grantsArray[i] < avg ) {
            smallGrantTotal = smallGrantTotal + grantsArray[i];
        } else {
            largGrants ++
        }
    }
    return ((newBudget - smallGrantTotal ) / largGrants)

  }

const grantsArray = [2, 100, 50, 120, 1000]
const newBudget = 190

  console.log(findGrantsCap(grantsArray, newBudget))