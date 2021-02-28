import React from 'react'
import Email from './Email'
import Resume from './Resume'
import Social from './Social'
import ReadMeLink from './ReadMeLink'

function Contact() {

    return (
      <div  id="contact">
        <h2 className="section-title">contact</h2>
        <Email />
        <h2 className="section-title">resume</h2>
        <Resume />
        <h2 className="section-title">portfolio details</h2>
        <ReadMeLink />
        <h2 className="section-title">social</h2>
        <Social />
      </div>
    )
}

export default Contact