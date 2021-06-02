import React from 'react';
import './player.css' ;
import SideBar from "./SideBar";
import Playerbody from "./Playerbody";
import Footer from "./Footer";

function player({spotify}) {
    return (
        
        <div className ='player1'>
        <h1>  </h1>
        

        
        
        
        
        <div className ="sidebar">
            <SideBar />
        </div>





        <div className ="body"> 
        <Playerbody />   
        </div>
    




        <div className ="player_footer">
        <Footer />
        </div>
    
    
    </div>
    )

}

export default player
