import React from 'react'
import "./intro.css"
import Me from '../../img/me.png'

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">
                        Hello, My Name is
                    </h2>
                     <h1 className="i-name">Sanket Bagad</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Full Stack Developer
                            </div>
                            <div className="i-title-item">
                               React JS Developer 
                            </div>
                            <div className="i-title-item">
                                Node JS Developer
                            </div>
                            <div className="i-title-item">
                                Mongo DB
                            </div>
                            <div className="i-title-item">
                                React Native
                            </div>
                            <div className="i-title-item">
                                Competive Programming
                            </div>
                           
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop cool UI's, currently for myself but would love to work for you.
                        I use MERN stack to build full-stack applications and can also deploy them for you, as you can see my work/Projects below.
                        If you need Something just remember <span>I will be There for you.</span>
                    </div>
                </div>
            
            
            </div>
            <div className="i-right">
                <img src={Me} alt="Sanket Bagad" className="i-img" />
           
           
            </div>
            
        </div>
    )
}

export default Intro
