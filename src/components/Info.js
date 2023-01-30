import React from "react";
import email from '../img/email.png'
import linkedin from '../img/linkedin.png'

export default function Info(){
    return(
        <div className="info-wrapper">
            <div className="image">

            </div>
            <h1 className="header-name">Oladele wonder</h1>
            <h3 className="job">Frontend developer</h3>
            <h4 className="website">oladelewonder.website</h4>
            <div className="btn-container">
                <button className="email-btn">
                        <img src={email} />
                    Email</button>
                <button className="linkedin-btn">
                        <img src={linkedin} />
                    Linkedin</button>
            </div>
       </div> 
    )
}