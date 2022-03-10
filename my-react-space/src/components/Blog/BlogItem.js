import React from "react";
import "./styles.css"

function BlogItem({blog,favBlog, retire}){
    return (
        <div onClick={()=>favBlog(blog)} className="blogPost">
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <button className="purge" onClick={()=>retire(blog)} >Purge</button>
        </div>
    )
}

export default BlogItem;