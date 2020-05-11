// // how does it works: This is very simple. Go through the array, find the index of the 
// lowest element swap the lowest element with the first element. Hence first element is 
// the lowest element in the array.

// // Now go through the rest of the array (excluding the first element) and find the 
// index of the lowest and swap it with the second element.

// // thats how it continues to select (find out) the lowest element of the array and 
// putting it on the left until it hits the last element.

// loop 1 sorts by pulling the smallest to the front 
// loop 2 finds smallest num in array and swap it for the first element 
// 
const SelectionSort = (arr) => {
    for (let i = 0; i<arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            min = arr[min] < arr[j] ? min : j
        }
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp; 
    }
    return arr;
}

const selectionSort = SelectionSort([4,5,88,1,3])
console.log('SelectionSort should return [1, 3, 4, 5, 88] got', selectionSort)