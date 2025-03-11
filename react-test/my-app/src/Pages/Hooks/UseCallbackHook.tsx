import { useState } from "react";
import DoOperation from "./DoOperation";

const UseCallbackHook: React.FC = () => {
    const [operations, setOperations] = useState<string[]>([])
    const [count, setConut] = useState<number>(0);

    const doOperation = () => {
        setOperations((t) => [...t, "new operation"]);
    }
    return (
        <>
            <p>
                React useCallback Hook एक मेमोइज़्ड कॉलबैक फ़ंक्शन return karta है|
                useCallback Hook केवल तभी Run  होता है जब इसकी कोई dependency update होती है|
                This can improve performance.
                किसी component को पुनः render होने से रोकता है जब तक कि उसके props में बदलाव न हो|
            </p>

            <DoOperation operations={operations} doOperation={doOperation} />
            <hr />
            <strong>Count: {count}</strong>
            <br />
            <button className="btn btn-primary" onClick={() => { setConut(count + 1) }}>Add Count</button>
        </>
    )
}

export default UseCallbackHook;