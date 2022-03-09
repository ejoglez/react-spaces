import React from 'react'
import Header from './Header'
import BlogList from "./BlogList"
import SidePanel from './SidePanel';
import BlogForm from './BlogForm'
import "./styles.css"

function BlogSection() {
    return (
        <div className="mainContent">
        <Header />
        <BlogForm />
        <BlogList />
        <SidePanel/>
        </div>
    )
}

export default BlogSection;