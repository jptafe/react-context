import React, { useContext } from "react";
import { countContext } from "../context/countcontext";

function Register() {
    const [context, setContext] = useContext(countContext);

    return (
        <div>
            <h2>Register</h2>
            <h4>Registration page</h4>
            <button onClick={() => setContext(3)}>
                increment context value
            </button>
        </div>
    );
}
export default Register;