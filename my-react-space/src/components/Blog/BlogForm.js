import React,{useState} from 'react'

function BlogForm({blog,setBlog}){  
    const [update, setUpdate]=useState({
        // useerId:parseInt(""),
        // id:parseInt(""),
        title:"",
        body:""
    })

    function submit(e){
        e.preventDefault()
        // setBlog([...blog,update])

        fetch(`http://localhost:3001/blogs/`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title:update.title,
                body:update.body
            })
        }).then(r=>r.json() )
        .then(d=> setBlog([...blog,d]))
    }
    
    function newBlog(x){
        setUpdate({...update, [x.target.name]: x.target.value })
    }
    
    return(
    <form 
    onSubmit={submit}
    className="form">
        <h1>Write about it</h1>
        <label>
            Title:
            <input 
            value={update.title}
            onChange={newBlog}
            type="text" name="title" />
        </label>
        <label>
            Body:
            <textarea 
            value={update.body}
            onChange={newBlog}
            type="text"  name="body" />
        </label>
            <button 
            type="submit" className="submitBtn">Submit</button>
    </form>
    )

}

export default BlogForm;