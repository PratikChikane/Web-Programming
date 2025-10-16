import {useState, useEffect} from "react";

function HookCount(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `You Clicked ${count} times`;
    }, [count]);

    return(
        <div>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default HookCount;