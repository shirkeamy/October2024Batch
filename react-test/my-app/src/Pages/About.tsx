import React, { useState } from "react"

function About() {

    const [count, setCount] = useState<number>(0);

    return (
        <>
            <h1>
                About Page
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, eaque.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia repellat explicabo placeat iusto, consectetur at quas hic minima fugit sapiente.
            </p>
            <ol>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ol>

            <h3>Count is {count}</h3>
            <button type="button"
                onClick={() => { setCount(count + 1) }}
                className="btn btn-sm btn-primary"
            >Increase count</button>
        </>

    )
}

export default About;