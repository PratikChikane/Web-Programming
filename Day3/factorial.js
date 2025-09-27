

function Factorial(n){
    if(n==0 || n==1){
        return n;
    }
    else{
        return n*Factorial(n-1);
    }
}
console.log(Factorial(5));
