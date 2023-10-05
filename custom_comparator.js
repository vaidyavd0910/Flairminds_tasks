const arr = [5, 12, 13, 10, 8, 20, 1];
function customComparator(a, b) {
    const diffA = Math.abs(a - 10);
    const diffB = Math.abs(b - 10);

    return diffA - diffB;
}
arr.sort(customComparator);
console.log(arr);
