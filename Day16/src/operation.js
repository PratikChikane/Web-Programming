// import { Component } from "react";

// const CalculatorSepcificOperation = ({num1,num2,operation})=>{
//     let result;

//     switch(operation){
//         case 'add':
//             result=num1+num2;
//             break;
//         case 'subtract':
//             result = num1-num2;
//             break;
//         case 'multiply':
//             result = num1 *num2;
//             break;
//         case 'divide':
//             result = num2 !==0?num1/num2:'cannot divide by zero';
//             break;
//         default :
//         result ='Invalid Operation';
//     }
//     return(
//         <div>
//             <h2>Calculator</h2>
//             <p>Number 1:{num1}</p>
//             <p>Number 2:{num2}</p>
//             <p>Operation:{operation}</p>
//             <p>Result:</p>
//         </div>
//     );
// };
// export default  CalculatorSepcificOperation;
import React, { useState } from "react";

const CalculatorSpecificOperation = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        let res;
        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        switch (operation) {
            case 'add':
                res = firstNum + secondNum;
                break;
            case 'subtract':
                res = firstNum - secondNum;
                break;
            case 'multiply':
                res = firstNum * secondNum;
                break;
            case 'divide':
                res = secondNum !== 0 ? firstNum / secondNum : 'cannot divide by zero';
                break;
            default:
                res = 'Invalid Operation';
        }
        setResult(res);
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
                placeholder="Number 1"
            /><br></br>
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
                placeholder="Number 2"
            /> <br></br>
            <select value={operation} onChange={e => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
            <p>Result: {result}</p>
        </div>
    );
};

export default CalculatorSpecificOperation;
