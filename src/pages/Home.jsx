import React, { useEffect, useState } from 'react'
import './Pages.css'
import './Home.css'
import Button from '../components/Button/Button.component'

const Homepage = ({ setActiveItem }) => {

    const [activities] = useState([
        {
            date: "1/1/21", 
            description: "Sent", 
            amount: "N100.00"
        }, 
        {
            date: "2/2/21", 
            description: "Recieved", 
            amount: "N200.00"
        }, 
        {
            date: "3/3/21", 
            description: "Sent", 
            amount: "N300.00"
        }
    ])

    useEffect(() => {
        setActiveItem("Home")
    }, [setActiveItem])

    return (
        <div className="page-container">
            <div className="balances home-section">
                <h3>WALLET BALANCE</h3>
                <h3>TOKEN BALANCE:</h3>
                <h3>NAIRA BALANCE:</h3>
            </div>


            <div className="home-section currency-select">
                <h6>Select Currency:</h6>
            </div>

            <div className="home-section token-section">
                <h3>TOKEN</h3> <span>0.0000000001</span>
            </div>

            <div className="buttons-section">
                <Button text="Send"/>
                <Button text="Recieve"/>
            </div>
            <div className="home-section">
                <h5>Recent Activities</h5>
                <table className="activity-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map(activity => <tr>
                                <td>{activity.date}</td>
                                <td>{activity.description}</td>
                                <td>{activity.amount}</td>
                             </tr>)}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Homepage;

