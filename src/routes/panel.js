import React, { useContext } from "react";
import { countContext } from "../context/countcontext";

function Panel() {
    const [context, setContext] = useContext(countContext);

    return (
        <div>
            <h2>Panel</h2>
            <h4>control panel</h4>
            <button onClick={() => setContext(2)}>
                increment context value
            </button>
        </div>
    );
}
export default Panel;