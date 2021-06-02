import React from 'react'
import "./sidebar.css"
import SidebarOption from './sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer';
function SideBar() {
     const [{ playlists }] = useDataLayerValue()
    return (
        <div className="player_sideBar">
            <img className="logo"
            src ="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt = ""/>
            <SidebarOption Icon = {HomeIcon} title = "Home"/>            
            <SidebarOption Icon = {SearchIcon} title = "Your Library"/>   
            <SidebarOption Icon = {LibraryMusicIcon} title = "Search"/>     
            <strong className="playlist1">Playlists</strong>
            <hr />   
            {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name}/>
            
            ))}
        </div>
    );
}

export default SideBar
