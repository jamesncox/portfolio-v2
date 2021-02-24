import React from 'react'
import ImageLoad from './ImageLoad'

const DisplayProject = React.memo(({ title, subtitle, src, placeholder, id, alt, features, github, url}) => {

    return (
      <div className="projects-card">
        <p className="project-title">{title}</p>
        <p className="project-subtitle">{subtitle}</p>
        <ImageLoad
          className="project-image"
          src={src}
          placeholder={placeholder}
          alt={alt}
        />
        <input id={id} className="toggle" type="checkbox" />
        <label htmlFor={id} className="lbl-toggle">
          LEARN MORE
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p className="project-description">Featuring</p>
            {features.map((feature) => {
              return (
                <ul key={feature.id}>
                  <li key={feature.id} className="project-description">{feature.text}</li>
                </ul>
              )
            })}
            <div className="project-icon-wrapper">
              <div className="icons">
                <a href={github} rel="noopener noreferrer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </div>
              <div className="icons">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

})

export default DisplayProject