import React from "react";
import "./styles.css"

function BlogItem({blog,favBlog, retire}){
    return (
        <div onClick={()=>favBlog(blog)} className="blogPost">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <div className="btnSection">
            <button className="btn">View More</button>
            <button className="btn" onClick={()=>retire(blog)}>Purge</button>
            </div>
        </div>
    )
}

export default BlogItem;