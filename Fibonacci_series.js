let num = 50;
let n1 = 0, n2 = 1;
console.log(n1);
console.log(n2);
fibonacci(num - 2, n1, n2);

function fibonacci(num, n1, n2) {
    if (num > 0) {
        let n3 = n1 + n2;
        console.log(n3);
        fibonacci(num - 1, n2, n3);
    }
}
