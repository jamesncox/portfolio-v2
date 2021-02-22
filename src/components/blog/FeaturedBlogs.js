import React from 'react'
import DisplayBlog from '../../hooks/DisplayBlog'
import UseState from '../../assets/images/useState.jpg'
import UseStateTiny from '../../assets/images/useStateTiny.jpg'

export default function FeaturedBlogs() {
    return (
        <>
            <p className="section-title">featured blog posts</p>
            <div className="projects-wrapper">
                <DisplayBlog
                    title="The Boredinator"
                    // subtitle="Activities and inspiration to stave off boredom"
                    src={UseState}
                    placeholder={UseStateTiny}
                    // id="collapsible-boredinator"
                    alt="Black background with the word useState written in bold and white"
                    // features={BoredinatorFeatures}
                    url="https://dev.to/jamesncox/react-hooks-series-usestate-12ne"
                />
            </div>
        </>
    )
}