import React from "react";
import "./styles.css"

function BlogItem({title, body}){
    return (
        <div className="blogPost">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default BlogItem;