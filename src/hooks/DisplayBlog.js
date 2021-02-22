import React from 'react'
import ImageLoad from './ImageLoad'

const DisplayBlog = React.memo(({ title, src, placeholder, alt, description, url}) => {

    return (
      <div className="projects-card">
        <p className="blog-title">{title}</p>
        {/* <p className="project-subtitle">{subtitle}</p> */}
        <ImageLoad
          className="project-image"
          src={src}
          placeholder={placeholder}
          alt={alt}
        />
        <p className="project-description">{description}</p>
        <div className="project-icon-wrapper">
            <div className="icons">
            <a href={url} rel="noopener noreferrer" target="_blank">
                <svg
                className="icon-link"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                >
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
            </a>
            </div>
        </div>
      </div>
    );
})

export default DisplayBlog