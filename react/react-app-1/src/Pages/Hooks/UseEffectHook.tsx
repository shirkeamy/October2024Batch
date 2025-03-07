import React, { useEffect, useState } from "react";

const UseEffectHook: React.FC = () => {

    const [counter, SetCounter] = useState(0);
    const [mult, SetMult] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         SetCounter(counter + 1)
    //     }, 1000)
    // })
    
    useEffect(() => {
        setTimeout(() => {
            SetCounter(counter + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        if(counter > 5)
            SetMult(mult * 2)
    }, [counter])

    return (
        <>
            <h2>Counter is {counter}</h2>
            <h2>mult is {mult}</h2>
            <button type="button"
                className="btn btn-priamry btn-sm"
                onClick={() => { SetCounter(counter + 1) }}
            >
                Set Counter
            </button>
        </>
    )

}

export default UseEffectHook;