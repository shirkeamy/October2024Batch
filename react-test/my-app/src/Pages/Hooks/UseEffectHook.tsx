import react, { useEffect, useState } from "react";

const UseEffectHook: React.FC = () => {
    
    const [count, setCount] = useState(0);
    const [multiplication, setMultiplication] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (count > 20)
            setMultiplication(multiplication * 20)
        
    }, [count])

    return (
        <>
            <h1>I've rendered {count} times!</h1>
            {
                count > 20 &&
                <h2>Now you hit count to 20 and current count is {count}</h2>
            }
            <h3>multiplication is {multiplication}</h3>
            <button onClick={() => { setCount((count) => count + 1) }}>Add</button>

        </>
    )
}

export default UseEffectHook;