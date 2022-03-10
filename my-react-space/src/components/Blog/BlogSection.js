import React,{useState,useEffect} from 'react'
import Header from './Header'
import BlogList from "./BlogList"
import SidePanel from './SidePanel';
import BlogForm from './BlogForm'
import "./styles.css"

function BlogSection() {

    const [blogs, setBlogs] = useState([])
    const [fav, setFav]=useState([])


function removeFav(e){
    let purge= fav.filter(x=> x !== e)
    setFav(purge)
}

function favBlog(x){
    if (fav.includes(x) ){
        return null
    }else{
        setFav([...fav,x])
    }
}

    useEffect(() =>{
        fetch("http://localhost:3001/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

function retire(x){
    fetch(`http://localhost:3001/blogs/${x.id}`,{
        method:'DELETE'
    })
    removeFav(x)
    let collection= blogs.filter(el=> el!==x)
    setBlogs(collection)
}

    return (
        <div className="mainContent">
        <Header />
        <BlogForm blog={blogs} setBlog={setBlogs} />
        <BlogList blogs={blogs} retire={retire} favBlog={favBlog} />
        <SidePanel fav={fav} retire={retire} removeFav={removeFav}/>
        </div>
    )
}

export default BlogSection;