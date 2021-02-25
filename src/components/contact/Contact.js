import React from 'react'
import Email from './Email'
import Resume from './Resume'
import Social from './Social'
import ReadMeLink from './ReadMeLink'

function Contact() {

    return (
      <div  id="contact">
        <p className="section-title">contact</p>
        <Email />
        <p className="section-title">resume</p>
        <Resume />
        <p className="section-title">portfolio details</p>
        <ReadMeLink />
        <p className="section-title">social</p>
        <Social />
      </div>
    )
}

export default Contact