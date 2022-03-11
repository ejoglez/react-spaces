import React from "react";
import "./styles.css"

function BlogItem({blog,favBlog, retire}){
    return (
        <div onClick={()=>favBlog(blog)} className="blogPost">
            <h3>{blog.title}</h3>
            <p>{blog.body} </p>
            {/* <a href={blog.link}>{blog.link}</a> */}
            <br></br>
            <div className="btnSection">
                <input className='btn'
                type='button' 
                value="view more" 
                onClick={(e) => {
                    e.stopPropagation()
                    document.location.href=blog.link}}/>
                <button 
                className="btn" 
                onClick={(e)=>{
                    e.stopPropagation()
                    retire(blog)}}>Purge</button>
            </div>
        </div>
    )
}

export default BlogItem;