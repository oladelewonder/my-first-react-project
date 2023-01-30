import React from "react";
import githubLogo from '../img/github-mark.png'
import twitterLogo from '../img/twitter.png'
import linkedinLogo from '../img/linkedin1.png'
 

export default function Footer(){
    return(
        <div className="footer-wrapper">
            <div className="footer-img">
                <img src={githubLogo} />
                <img src={twitterLogo} />
                <img src={linkedinLogo} />
            </div>
        </div>
    )
}