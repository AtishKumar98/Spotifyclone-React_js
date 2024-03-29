import React from 'react';
import "./sidebaroption.css";


function sidebaroption({title,Icon}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebar_option"/>}
           {Icon? <h4>{title} </h4>:<p> {title} </p>}
                               
        </div>
    )
}

export default sidebaroption
