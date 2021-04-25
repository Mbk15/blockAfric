import React, { useEffect } from 'react'

import './Pages.css'


const Activity = ({setActiveItem}) => {

    useEffect(() => {
        setActiveItem("Activity")
    }, [setActiveItem])

    return (
        <div className="page-container">
            <h4>
                Activity Page
        </h4>
        </div>
    )
}

export default Activity;