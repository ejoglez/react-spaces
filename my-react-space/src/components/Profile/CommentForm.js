import React from 'react';

function CommentForm(){
    return(
        <div>
        <h1 id="commentHeader">Leave a Comment</h1>
        <div className="commentForm">
            <form>
                <label> Name:
                <input 
                type="text"
                name="name"/>
                </label>
                <br></br>
                <label> Comment:
                <input 
                type="text"
                name="comment" />
                </label>
                <br></br>
                <button 
                type="submit"
                className="submitBtn">
                    SEND IT
                </button>
            </form>
        </div>
        </div>
    )
}

export default CommentForm;