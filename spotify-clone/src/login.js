import React from 'react'
import {loginUrl} from './spotify'
import './login.css'

function login() {
    return (
        <div className="login">
            <img  src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"  alt="" />          
            {/* spotify logo */}
            {/* spotify login with buttons */}
            <a href={loginUrl}>Login with Spotify</a>


        </div>
    )
}

export default login
