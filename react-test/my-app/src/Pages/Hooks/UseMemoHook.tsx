import { useState } from "react";

const UseMemoHook: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [operations, setOperations] = useState<string[]>([])
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount(count + 1);
    };
    const doOperation = () => {
        setOperations((t) => [...t, "new operation"]);
    };

    return (
        <>

            <p>
                <ol>
                    <li>useMemo Hook returns a memoized value</li>
                    <li>caching a value so that it does not need to be recalculated / recalled</li>
                    <li>useMemo Hook only runs when one of its dependencies update</li>
                    <li>The useMemo and useCallback Hooks are similar</li>
                    <li>main difference is that useMemo returns a memoized value and useCallback returns a memoized function</li>
                </ol>
            </p>

            <div>
                <h2>My Todos</h2>
                <button className="btn btn-success" onClick={doOperation}>Do Operation</button>

                {
                    operations.map((opr: string, index: number) => {
                        return <p key={index}>{`You did operation: ${opr} number ${index + 1}`}</p>
                    })
                }
            </div>
            <hr />
            <div>
                <strong>Count: {count}</strong>
                <br />
                <button className="btn btn-success" onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    )
}

export default UseMemoHook;


const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};