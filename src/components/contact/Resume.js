import React from 'react'
import MyResume from '../../assets/pdfs/James Cox Resume.pdf'

export default function Resume() {
    return (
        <>
            <p className="section-title">resume</p>
            <p>
                <a className="contact-links" href="https://gitconnected.com/jamesncox/resume" rel="noopener noreferrer" target="_blank">
                    @gitconnected
                </a>
            </p>
            <p>
                <a className="contact-links" href={MyResume} download>
                    download PDF
                </a>
            </p>
        </>
    )
}