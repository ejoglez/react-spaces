import React from 'react'
import BlogItem from './BlogItem';

function SidePanel({fav,removeFav,retire}){

    let post= fav.map(el=>(
        <BlogItem key={el.id} retire={retire} blog={el} favBlog={removeFav} />
    ))


    return (
        <div className="sidePanel">
            <h1>Favorites</h1>
            {post}
        </div>
    )
}

export default SidePanel;
