import React from 'react'

function Spotify(){
    return(
        <div>
        <iframe 
        title="musicplayer"
        src="https://open.spotify.com/embed/playlist/64udZYI1KBoH5SNnGPaenR?utm_source=generator" 
        width="75%" 
        height="380" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )
}

export default Spotify;