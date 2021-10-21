import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    return (
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              
              <div className="c-left">
                <h1 className="c-title">
                    Let's Discuss If Interested About Something
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                       <img className="c-icon" src={Phone} alt={9644377621} />
                        +91 9644377621
                    </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Email} alt={9644377621} />
                        alencolins@gmail.com
                    </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Phone} alt={9644377621} />
                        35 Bombay Plot Road, Near Ambedkar Statue, Khetia (451881), Madhya Pradesh
                    </div>
                </div>
              </div>


              <div className="c-right">
                <p className="c-desc">
                    <b>Have something on Mind?</b> Get in touch. Always want to help on something and if any offer available contact Me. Also can work on Projects
                    If you want some.
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea name="message" rows="5" placeholder="message" />
                    <button type="submit">Submit</button>
                </form>
              </div>
              
          </div>  
        </div>
    )
}

export default Contact
