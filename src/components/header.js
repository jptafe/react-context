import React, { useContext } from "react";
import { countContext } from "../context/countcontext";

function Header() {
    const [context, setContext] = useContext(countContext);

    return (
        <div>
            Put a count here <span>{context}</span>
        </div>    
    )
}
export default Header;