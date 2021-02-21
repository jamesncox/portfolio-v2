import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import TheBoredinator from '../../assets/images/the-boredinator.jpg'
import TheBoredinatorTiny from '../../assets/images/the-boredinator-tiny.jpg'
import GifFit from '../../assets/images/GIF-FIT.jpg'
import GifFitTiny from '../../assets/images/GIF-FIT-tiny.jpg'
import DoDidDone from '../../assets/images/do-did-done.jpg'
import DoDidDoneTiny from '../../assets/images/do-did-done-tiny.jpg'

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
                    <div className="wrap-collabsible">
                        <input id="collapsible-boredinator" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible-boredinator" className="lbl-toggle">More Info</label>
                        <div className="collapsible-content">
                            <div className="content-inner">
                                <p className="project-description">Featuring: </p>
                                <p className="project-description">Light/Dark theme toggle with localStorage to save user's preference on page reload; CSS variables for efficient light and dark theme management; State management with Redux; CSS-only design, no CSS libraries; Custom, reusable Hook called ImageLoad to lazy load images; Custom JSON data objects, simulating a local API; Separate and reusable components</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects-card">
                    <p className="project-title">GIF FIT</p>
                    <p className="project-subtitle">Home workouts made easy!</p>
                    <ImageLoad
                        className="project-image"
                        src={GifFit}
                        placeholder={GifFitTiny}
                        alt="Screenshot of GIF FIT app"
                    />
                    <div className="wrap-collabsible">
                        <input id="collapsible-gif-fit" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible-gif-fit" className="lbl-toggle">More Info</label>
                        <div className="collapsible-content">
                            <div className="content-inner">
                                <p className="project-description">Featuring: </p>
                                <p className="project-description">React front-end, Redux to manage state, and Material UI for styling. Gifs are sourced from Giphy.com (special thanks and credit to 8fit for uploading so many awesome exercises). Made with love to genuinely help others during these stressful and challenging times.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects-card">
                    <p className="project-title">Do Did Done</p>
                    <p className="project-subtitle">Keep track of your todos by category</p>
                    <ImageLoad
                        className="project-image"
                        src={DoDidDone}
                        placeholder={DoDidDoneTiny}
                        alt="Screenshot of The Boredinator home page"
                    />
                    <div className="wrap-collabsible">
                        <input id="collapsible-do-did-done" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible-do-did-done" className="lbl-toggle">More Info</label>
                        <div className="collapsible-content">
                            <div className="content-inner">
                                <p className="project-description">Featuring: </p>
                                <p className="project-description">React frontend and a Rails API backend. The React frontend features Material UI components, React router, Redux and local state management, functional components and React hooks and a thoughtful design for improved UI and UX. The frontend consumes the Rails API with full CRUD functionality. The Rails API backend is hosted on Heroku and features a PostgreSQL database. It handles sessions, cookies, CRUD functionality, separation of concerns and MVC structure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}