import React from 'react'

function BlogForm(){  
    
    
    return(
    <form className="form">
        <h1>Write about it</h1>
        <label>
            Title:
            <input type="text" name="name" />
        </label>
        <label>
            Body:
            <textarea type="text"  name="name" />
        </label>
            <input type="submit" value="Submit" className="submitBtn"/>
    </form>
    )

}

export default BlogForm;