import React, {useRef, useState} from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from "emailjs-com"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_bzm2igk",
            "template_mp002gi",
            formRef.current,
            "user_vF2FkE5TEWOicVhqsT0YD"
        ).then(
            (result) => {
                setDone(true)
            }, (error) => {
                console.log(error.text)
            }
        )

    }
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
                       <img className="c-icon" src={Phone} alt="9644377621" />
                        +91 9644377621
                    </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Email} alt="sanketbagad.com" />
                        alencolins@gmail.com
                    </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Address} alt="Sanket Bagad" />
                        35 Bombay Plot Road, Near Ambedkar Statue, Khetia (451881), Madhya Pradesh
                    </div>
                </div>
              </div>


              <div className="c-right">
                <p className="c-desc">
                    <b>Have something on Mind?</b> Get in touch. Always want to help on something and if any offer available contact Me. Also can work on Projects
                    If you want some.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea name="message" rows="5" placeholder="message" />
                    <button type="submit">Submit</button>
                    {done && "Thank You..."}
                </form>
              </div>
              
          </div>  
        </div>
    )
}

export default Contact
