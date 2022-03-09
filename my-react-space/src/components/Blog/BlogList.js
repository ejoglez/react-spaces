import React, {useState, useEffect} from 'react'
import BlogItem from './BlogItem'
import "./styles.css"

function BlogList(){

    const [blogs, setBlogs] = useState([])
    
    useEffect(() =>{
        fetch("http://localhost:3001/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="blogList-wrap">
         {blogs.map(blog=><BlogItem key={blog.id} title={blog.title} body={blog.body}/>)}
        </div>
    )
}

export default BlogList;