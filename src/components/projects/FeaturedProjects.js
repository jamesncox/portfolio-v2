import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import TheBoredinator from '../../assets/images/the-boredinator.jpg'
import TheBoredinatorTiny from '../../assets/images/the-boredinator-tiny.jpg'

export default function FeaturedProjects() {

    return (
        <>
            <p className="section-title">featured projects</p>
            <div className="projects-wrapper">
                <div className="projects-card">
                    <p className="project-title">The Boredinator</p>
                    <p className="project-subtitle">Activities and inspiration to stave off boredom</p>
                        <ImageLoad
                            className="project-image"
                            src={TheBoredinator}
                            placeholder={TheBoredinatorTiny}
                            alt="Screenshot of The Boredinator home page"
                        />
                    <p className="project-description">Featuring: Light/Dark theme toggle with localStorage to save user's preference on page reload; CSS variables for efficient light and dark theme management; State management with Redux; CSS-only design, no CSS libraries; Custom, reusable Hook called ImageLoad to lazy load images; Custom JSON data objects, simulating a local API; Separate and reusable components</p>
                </div>
            </div>
        </>
    )
}