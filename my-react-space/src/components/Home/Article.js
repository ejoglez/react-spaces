import React from 'react'
import "./Home.css"

function Article({title, url, urlToImage, name, author, description}){
    return(

        <div className="newsArtkill" key={title}>
            <h2><stron>{title}</stron></h2>
            <a href={url}> 
                <img  src={urlToImage} alt="editoral pic"/> 
            </a>
            <h4><em>{name}</em></h4>
            <p>Written by: {author}</p>
            <p>{description}</p>
        </div>
    )
}

export default Article;