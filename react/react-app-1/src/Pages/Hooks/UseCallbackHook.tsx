import { useState, useCallback, useMemo } from "react";
import DoOperations from "./DoOperations";

const UseCallbackHook: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [operations, setOperations] = useState<string[]>([]);
    const valueFromFun = useMemo(()=>{return bigOperation(count)}, [count]);

    // const doOperation = () => {
    //     setOperations((rest) => [...rest, "Add Oprt"])
    // }

    const doOperation = useCallback(() => {
        setOperations((rest)=>[...rest,"Add Oprt"])
    }, [operations])

    return (
        <>
            <DoOperations operations={operations} doOperation={doOperation} />
            <br />
            <br />
            <strong>{valueFromFun}</strong>
            <br />
            <br />
            <strong>Count: {count}</strong>
            <br />

            <button className="btn btn-primary" onClick={() => { setCount(count + 1) }}>Set Count</button>
        </>
    )
}

export default UseCallbackHook;

const bigOperation = (num: number) => {
    console.log('doing operation....')
    for (let i = 0; i < 1000000000; i++) {
        num += 1
    }
    return num;
};