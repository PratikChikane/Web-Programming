import React, {useCallback, useState} from "react";

const funcSet = new Set();

const DemoCallBack = () =>{
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    // const incCnt =() => setCnt(cnt +1 );
    const incCnt =useCallback(()=>
    setCnt((prevCnt) => prevCnt+1), []
    );

    const incCnt1 = useCallback(()=> setCnt(cnt+1), [cnt]);
    const decCnt = useCallback(()=> setCnt(cnt-1), []);
    const incNum = useCallback(()=> setNum(num+1), [num]);

    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);

    return(
        <div>
            <h2>Without useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
            <h1>Count: {cnt}</h1>
            <h2>Number: {num}</h2>
            <h2>Count: {funcSet.size}</h2>
        </div>
    )

}
export default DemoCallBack;