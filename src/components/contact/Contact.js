import React from 'react'
import Email from './Email'
import Resume from './Resume'
import Social from './Social'

function Contact() {

    return (
      <div  id="contact">
        <p className="section-title">contact</p>
        <Email />
        <p className="section-title">resume</p>
        <Resume />
        <Social />
      </div>
    )
}

export default Contact