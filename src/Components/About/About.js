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

           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">
                   I am results Oriented, constantly checking in with the goal to determine how close or how far away we are and what will it take to make it happen.
               </p>
               <p className="a-desc">
                   Born on March 1, living in Khetia(MP), studied in Shahada, and that's all about my shitty life.
               </p>
            </div> 
        </div>
    )
}

export default About
