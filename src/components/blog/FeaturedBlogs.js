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
                    title="React Hooks Series: useState"
                    // subtitle="Activities and inspiration to stave off boredom"
                    src={UseState}
                    placeholder={UseStateTiny}
                    alt="Black background with the word useState written in bold and white"
                    description="Part one in my React Hooks Series. I examine the useState hook in a basic timer app with examples from Codesandbox."
                    url="https://dev.to/jamesncox/react-hooks-series-usestate-12ne"
                />
            </div>
        </>
    )
}