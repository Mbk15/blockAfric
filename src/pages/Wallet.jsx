import React, { useEffect } from 'react'
import './Pages.css'

const Wallet = ({ setActiveItem }) => {

    useEffect(() => {
        setActiveItem("Wallet")
    }, [setActiveItem])

    return (
        <div className="page-container">
            <h4>
                Wallet Page
        </h4>
        </div>
    )
}

export default Wallet;