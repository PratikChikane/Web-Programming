// unction fetchData(callback) {
//     console.log('All arguments:', process.argv);
//     let a = process.argv[2];// read the command line arg
//     for (let i = 1; i < 11; i++) {
//         console.log(i * a);
//     }
// }

// // node Args.js 12 15 18 16 

// fetchData()


function printNumber(){
    for(let i= 1; i<=100; i++){
        if(i%3==0 && i%5==0){
            console.log("foobar");
            
        }else if(i%5==0){
            console.log("bar");
            
        }
        else if(i%3 ==0 ){
            console.log("foo");
            
        }
        else{
        console.log(i);
        }
    }    
}
printNumber();