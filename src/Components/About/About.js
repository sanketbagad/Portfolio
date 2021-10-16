import React from 'react'
import "./About.css"
import Ab from "../../img/About.jpg"

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img className="a-img" src={Ab} alt="About Sanket Bagad" />
               </div>
           </div>

           <div className="a-right"></div> 
        </div>
    )
}

export default About
