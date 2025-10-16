import { useState, useEffect } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    const [table, setTable] = useState([]);

    const increment = ()=>{
        setCount(count+1);
    };

    const decrement = () =>{
        setCount(count -1);
    };

    const reset =()=>{
        setCount(0);
        }
        useEffect(() => {
        if (count > 0) {
            const newTable = [];
            for (let i = 1; i <= 10; i++) {
                newTable.push(`${count} x ${i} = ${count * i}`);
            }
            setTable(newTable);
        } else {
            setTable([]);
        }
    }, [count]);

        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                {count > 0 && (
                <div>
                    <h2>Multiplication Table of {count}</h2>
                        {table.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </div>
            )}
            </div>
        )
}
export default Counter;