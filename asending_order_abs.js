function sortByAbsoluteValue(inputArray) {
    for (var i = 0; i < inputArray.length - 1; i++) {
        for (var j = 0; j < inputArray.length - i - 1; j++) {
            if (Math.abs(inputArray[j]) > Math.abs(inputArray[j + 1])) {
                var temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
    return inputArray;
}
/*function compareByAbsoluteValue(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    
    return absA - absB;
}
// Sort the array using the custom comparison function
inputArray.sort(compareByAbsoluteValue);

*/

const inputArray = [5, 12, -13, -10, -8, 20, 1];
const sortedArray = sortByAbsoluteValue(inputArray);

console.log(sortedArray);
