import React from 'react'
import "./AboutCard.css";

function AboutCard({bgImage,iconImage,text}) {
    return (
        <div className="about_card"style={{backgroundImage:" url("+bgImage+")"}}>
            <div className="front">

            </div>
            <div className="back">
                <img src={iconImage} alt=""/>
                <p>{text}</p>
            </div>

            
        </div>
    )
}

export default AboutCard
