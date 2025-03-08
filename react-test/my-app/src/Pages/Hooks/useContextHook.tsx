import { createContext } from "react";
import ComponentA from "../Components/ComponentA";


export const data = createContext("");
export const data1 = createContext("");

const UseContextHook: React.FC = () => {
    return (
        <>
            <data.Provider value="Peter Parker">
                <data1.Provider value="Mumbai">
                    <ComponentA />
                </data1.Provider>
            </data.Provider>
        </>
    )
}

export default UseContextHook;