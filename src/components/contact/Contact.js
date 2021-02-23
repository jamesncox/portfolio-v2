import React from 'react'
import Email from './Email'
import Resume from './Resume'
import Social from './Social'

function Contact() {

    return (
      <div  id="contact" style={{height: "1000px"}}>
      <p className="section-title">contact</p>
      <Email />
      <Resume />
      <Social />
    </div>
    )
}

export default Contact