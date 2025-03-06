import React, { useState } from "react";

function About() {

    const [count, setCount] = useState<number>(0);

    return (
        <>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, non.
            </p>

            <h3>Count is {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Add value</button>
        </>
    )
}

export default About;