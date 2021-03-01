import React from 'react'
import MyResume from '../../assets/pdfs/James Cox Resume.pdf'

export default function Resume() {
    return (
        <>
            <a className="at-symbol-link" href="https://gitconnected.com/jamesncox/resume" rel="noopener noreferrer" target="_blank">
                <div className="resume-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                </div>   
                GitConnected
            </a>
            <br />
            <br />
            <a className="pdf-link" href={MyResume} download>
                <div className="resume-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-labelledby="pdf-title pdf-desc">
                        <title id="pdf-title" lang="en">PDF icon</title>
                        <desc id="pdf-desc">Download James Cox PDF resume</desc>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </div>   
                PDF
            </a>
        </>
    )
}