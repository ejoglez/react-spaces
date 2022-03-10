import React from "react";
import "./Toggle.css"

function Toggle() {
    return (
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider" />
        </label>
    )
}

export default Toggle;