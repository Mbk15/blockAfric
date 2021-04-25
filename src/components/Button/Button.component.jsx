import React from 'react'
import './Button.styles.css'


const Button = ({text}) => {
    return (
        <button className="button-blue">{text}</button>
    )
}

export default Button;