let old_arr = [1,3,5,2,1,5,7,3,2,7,8];
let new_arr = [];
for(var i =0 ; i<old_arr.length;i++){
    if(new_arr.indexOf(old_arr[i])=== -1){
        new_arr.push(old_arr[i]);
    }
}
new_arr.forEach(element => {
    console.log(element);
});
/*function printUniqueElements(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArray = [...uniqueSet];
    uniqueArray.forEach(element => {
      console.log(element);
    });
  }
  
  const integerArray = [1, 2, 2, 3, 4, 4, 5];
  printUniqueElements(integerArray);*/