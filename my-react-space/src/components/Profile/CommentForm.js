import React, {useState}from 'react';

function CommentsForm({comments, setComments}){
    const [newComment, setNewComment] = useState({
        name: "",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Avatar_1_Placeholder_DumDarac.png",
        post:""
    })

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3001/comments", {
            method:"POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: newComment.name,
                image: newComment.image,
                post: newComment.post
            })
        }).then(res => res.json())
        .then(data => setComments([data,...comments]))
    }

    function updateComments(post){
        setNewComment({...newComment, [post.target.name]: post.target.value})
    }

    return(
        <div>
        <h1 id="commentsHeader">Leave a Comments</h1>
        <div className="commentsForm">
            <form>
                <label> Name:
                <input 
                type="text"
                name="name"
                value={newComment.name}
                onChange={updateComments}/>
                </label>
                <br></br>
                <label> Comments:
                <input 
                type="text"
                name="post"
                value={newComment.post} 
                onChange={updateComments}/>
                </label>
                <br></br>
                <button 
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}>
                    SEND IT
                </button>
            </form>
        </div>
        </div>
    )
}

export default CommentsForm;