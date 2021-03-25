import React from "react";
import ImageLoad from "./ImageLoad";

const DisplayBlog = React.memo(
  ({ title, src, placeholder, alt, description, url, ariaTitle, ariaDesc }) => {
    const ariaLabels = `${ariaTitle} ${ariaDesc}`;

    return (
      <div className="blog-card">
        <div className="blog-icon-wrapper">
          <h3 className="blog-title">{title}</h3>
          <div className="arrow-icon">
            <a href={url} rel="noopener noreferrer" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-labelledby={ariaLabels}
              >
                <title id={ariaTitle} lang="en">
                  Arrow icon
                </title>
                <desc id={ariaDesc}>Visit {title} blog at Dev.to</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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
  }
);

export default DisplayBlog;
