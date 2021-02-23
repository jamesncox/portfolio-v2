import React from 'react'
import Email from './Email'
import Resume from './Resume'

function Contact() {

    return (
      <div  id="contact" style={{height: "1000px"}}>
      <p className="section-title">contact</p>
      <Email />
      <Resume />
    </div>
    )
}

export default Contact