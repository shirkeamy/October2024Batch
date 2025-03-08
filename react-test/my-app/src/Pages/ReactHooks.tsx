import UseContextHook from "./Hooks/useContextHook";
import UseEffectHook from "./Hooks/UseEffectHook";

const ReactHooks: React.FC = () => {
    return (
        <>
            <UseEffectHook />
            <h2>useContext Hook</h2>
            <UseContextHook />
        </>
    )
}

export default ReactHooks;