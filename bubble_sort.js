function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const inputArray = [5, 12, -13, -10, -8, 20, 1];
const sortedArray = bubbleSort(inputArray.slice()); 

console.log(sortedArray);
