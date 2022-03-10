import React, {useEffect, useState} from 'react';
import Comments from './Comments'


function CommentsSection(){
    const [comments, setComments] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3001/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const displayComments = comments.map(item => <Comments key={item.id}
        name={item.name}
        image={item.image}
        post={item.post}/>)

    return (
        <div className="comments-section">
            {displayComments}
        </div>
 )
}

export default CommentsSection;