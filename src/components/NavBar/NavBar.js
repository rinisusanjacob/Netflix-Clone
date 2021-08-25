import React from 'react'
import { browserName, browserVersion } from "react-device-detect";
import "./NavBar.css";
if(`${browserName}`=='Firefox'){
    var br=1;
}else if(`${browserName}`=='Chrome'){
    var br=2;
}

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix" />
            <h2  className={br==1 ? 'series': 'seriesc'}>Series</h2>
            <h2 className={br==1 ? 'films': 'filmsc'}>Films</h2>
            <br></br>
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv-Ga0Qg90F9CTloSMXpOUe-o5lL_6Pu9GrDOWqU2pk7EcdwldSl8SIIObT8sfyKeujM&usqp=CAU" alt="" />
        </div>
    )
}

export default NavBar
