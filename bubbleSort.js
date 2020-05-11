// step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

// step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

// step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

// step-4: Look at the inner loop in the code below.

// step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

// step-6: and then we move backward inside the outer loop.
//I: take in array O: array, E: already sorted 
// W: loop through array comparing i to i-1 if i > then 
// swap i and i-1 evetually biggest num will be at the end. 
// repeat but stop loop at the last bubbled number 
// 
const bubbleSort = (arr) => {
for (let i = arr.length - 1; i >= 0; i--) {
    for(let j = 1; j<=i; j++) {
        if(arr[j-1] > arr[j]) {
            const temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
return arr;
}

const bubbleResult = bubbleSort([4,5,88,1,3])
console.log('bubbleSort should return [1, 3, 4, 5, 88] got', bubbleResult)