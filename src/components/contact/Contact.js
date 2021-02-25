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
        <p className="section-title">social</p>
        <Social />
        <p className="section-title">site info</p>
        <ReadMeLink />
      </div>
    )
}

export default Contact