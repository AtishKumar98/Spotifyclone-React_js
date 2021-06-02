import React from 'react'
import './songrow.css'

function songrow({track}) {
    return (
        <div className="songrow"> 
        <img className="songNameAlbum" src = {track.album.images[0].url}alt = ""/>
        <div className="songrow_info">
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist)=>artist.name).join(",")}-{""}
                {track.album.name}
            </p>
        </div>
            
        </div>
    )
}

export default songrow
