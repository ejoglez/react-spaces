import React from 'react'

function Comments({name, image, post}){
    return(
        <div className="comments">
            <div className="commentLeft">
                <p>{name}</p>
                <img src={image} alt="commentPic"/>
            </div>
            <div className="commentRight">
                <p>{post}</p>
            </div>
        </div>
    )
}

export default Comments;