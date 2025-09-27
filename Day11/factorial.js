// function fact(callback){
//     console.log(Number(process.argv[2]));
//     let res = 1;
//     let a = Number(process.argv[2]);
//     for(let i=1; i <=a; i++){
//         res*=i;

//     }
//     return res;

// }
// console.log(fact());


//by recursion
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}
const input = Number(process.argv[2]);

    console.log(`Factorial of ${input} is: ${fact(input)}`);
