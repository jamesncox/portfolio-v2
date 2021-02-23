import React from 'react'
import ImageLoad from './ImageLoad'

const DisplayBlog = React.memo(({ title, src, placeholder, alt, description, url}) => {

    return (
      <div className="blog-card">
        <div className="blog-icon-wrapper">
        <p className="blog-title">{title}</p>
          <div className="arrow-icon">
            <a href={url} rel="noopener noreferrer" target="_blank">
              <svg 
                  className="icon-link"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 16 16"
              >
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </div>   
        </div>
        <ImageLoad
          className="project-image"
          src={src}
          placeholder={placeholder}
          alt={alt}
        />
        <p className="project-description">{description}</p>
      </div>
    );
})

export default DisplayBlog