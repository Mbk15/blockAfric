import React, { useEffect } from 'react'
import './Pages.css'

const Market = ({setActiveItem}) => {

    useEffect(() => {
        setActiveItem("Market")
    }, [setActiveItem])
    

    return (
        <div className="page-container">
            <h4>
                Market Page
        </h4>
        </div>
    )
}

export default Market;