function countValues(str) {
    let count = 0;
    for(const char of str){
        // console.log(char);
        if(char ==='a' || char ==='e' || char ==='i' || char === 'o' || char ==='u'){
            count++;
        }
    }
    console.log(count);
}

let arr = ["pune","mumbai"];
arr.forEach(function printVal(val){
    console.log(val.toUpperCase());
})

Higher Order Function/MethodsA


let arr = [1,4,6,8,23];
    arr.forEach(function printi(i){
        console.log([i]*[i]);
    })


