import React, { useEffect } from 'react'

import './Pages.css'

const Earn = ({ setActiveItem }) => {

    useEffect(() => {
        setActiveItem("Earn")
    }, [setActiveItem])
    
    return (
        <div className="page-container">
            <h4>
                Earn Page
        </h4>
        </div>
    )
}

export default Earn;