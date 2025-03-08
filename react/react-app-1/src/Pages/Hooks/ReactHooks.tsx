import UseContextHook from "./UseContextHook";
import UseEffectHook from "./UseEffectHook";

const ReactHooks: React.FC = () => {
    return (
        <>
            <h1>useEffect Hook</h1>
            <UseEffectHook />
            <h1>useContext Hook</h1>
            <UseContextHook />
        </>
    )
}

export default ReactHooks;