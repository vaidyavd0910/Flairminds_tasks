let start_num = 50;
let end_num = 100;
for(var i = start_num ; i<=end_num; i++){
    for(var j=2; j<=i/2;j++ ){
        var flag = 0;
        if(i%j == 0){
            flag = 1;
            break;
        }
    }
    if(flag ==0){
        console.log(i);
    }
}