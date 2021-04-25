import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faWallet, faShoppingBasket, faGift } from '@fortawesome/free-solid-svg-icons'

import './Bottomnav.styles.css'
import { Link } from 'react-router-dom'


const Bottomnav = ({activeItem}) => {

    const navItems = [
        {
            text: "Home", 
            icon : faHome, 
            to: "/"
        },
        {
            text: "Activity", 
            icon : faBars, 
            to: "/Activity"
        },
        {
            text: "Wallet", 
            icon : faWallet, 
            to: "/Wallet"
        },
        {
            text: "Market", 
            icon : faShoppingBasket, 
            to: "/Market"
        },
        {
            text: "Earn", 
            icon : faGift, 
            to : "/Earn"
        }
    ]

    return (
        <div className="bottomnav-container">
            {navItems.map(item => 
            <Link to={item.to} className={`bottomnav-item ${activeItem === item.text ? "active" : ""}`}>
                <FontAwesomeIcon className="nav-icon" fontSize="20px" icon={item.icon}/>
                <span>{item.text}</span>
            </Link>) }
        </div>
    )
}

export default Bottomnav;