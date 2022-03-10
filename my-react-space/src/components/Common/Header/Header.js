import React from 'react'
import "./styles.css"

function Header({text = "Header"}){
    return (
        <div className="header">
            <h1>{text}</h1>
        </div>
    )
}

export default Header;