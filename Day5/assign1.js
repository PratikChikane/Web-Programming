// function Calculate(...a){
//     let sum =0;
//     let oddNumbers = [];

//     for(let i=0;i<a.length;i++){
//         sum +=a[i];
//     }
// console.log("Addition of Numbers is:",sum);
// }
// Calculate(1,2,3,4,5,6,7,8,9);

function Calculate(...a){
    let sum =0;
    let oddNumbers = [];

    for(let i=0;i<a.length;i++){
        sum +=a[i];
    

    if(a[i]%2!=0){
        oddNumbers.push(a[i]);
    }
    }
console.log("Addition of Numbers is:",sum);
console.log("Odd numbers are:",oddNumbers)
}
Calculate(1,2,3,4,5,6,7,8,9);
Calculate(3,5,4,2,6,7);