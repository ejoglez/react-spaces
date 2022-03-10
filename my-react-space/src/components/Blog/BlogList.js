import React from 'react'
import BlogItem from './BlogItem'
import "./styles.css"

function BlogList({blogs,favBlog,retire}){


    return (
        <div className="blogList-wrap">

         {blogs.map(blog=><BlogItem key={blog.id} blog={blog}  favBlog={favBlog} retire={retire} />)}

        </div>
    )
}

export default BlogList;