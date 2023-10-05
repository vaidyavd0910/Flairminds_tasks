let num = "1234";
function reverse_num(a){
    let str_num = a.toString();
    let reverse = str_num.split('').reverse().join('');
    let res = parseInt(reverse,10);
     return res;
}
 let new_num = reverse_num(num);
console.log(new_num);

