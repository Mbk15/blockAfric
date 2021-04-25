import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Topnav.styles.css'


const Topnav = () => {

    return (
        <div className="topnav-container">
            <div className="topbar-left">
                <span id="logo">Logo</span>
            </div>
            <div className="topbar-right">
                <FontAwesomeIcon icon={faUserCircle} className="topbar-right-icon" />
                <FontAwesomeIcon icon={faBell} className="topbar-right-icon"/>
            </div>
        </div>
    )
}

export default Topnav;