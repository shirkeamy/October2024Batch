import UseCallbackHook from "./Hooks/UseCallbackHook";
import UseContextHook from "./Hooks/useContextHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseMemoHook from "./Hooks/UseMemoHook";

const ReactHooks: React.FC = () => {
    return (
        <>
            {/* <UseEffectHook />
            <h2>useContext Hook</h2>
            <UseContextHook /> */}

            {/* <UseCallbackHook /> */}
            <UseMemoHook />
        </>
    )
}

export default ReactHooks;