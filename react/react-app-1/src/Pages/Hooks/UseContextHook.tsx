import React, { createContext } from "react";
import CompoentA from "../../Components/CompoentA";

export const data = createContext("");
export const data1 = createContext("");

const UseContextHook: React.FC = () => {

    const userName = "Demo User Name";

    return (
        <>
            <data.Provider value="Peter Parker Updated">
                <data1.Provider value="Mumbai, Maharashtra">
                    <CompoentA name={userName} address={'Pune'} />
                </data1.Provider>
            </data.Provider>
        </>
    )
}

export default UseContextHook;
