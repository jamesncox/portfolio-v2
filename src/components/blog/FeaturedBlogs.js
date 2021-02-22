import React from 'react'
import DisplayBlog from '../../hooks/DisplayBlog'
import UseState from '../../assets/images/useState.jpg'
import UseStateTiny from '../../assets/images/useStateTiny.jpg'
import UseEffect from '../../assets/images/useEffect.jpg'
import UseEffectTiny from '../../assets/images/useEffectTiny.jpg'

export default function FeaturedBlogs() {
    return (
        <>
            <p className="section-title">featured blog posts</p>
            <div className="projects-wrapper">
                <DisplayBlog
                    title="React Hooks Series: useState"
                    src={UseState}
                    placeholder={UseStateTiny}
                    alt="Black background with the word useState written in bold and white"
                    description="Part one in my React Hooks Series. I examine the useState hook in a basic timer app with examples from Codesandbox."
                    url="https://dev.to/jamesncox/react-hooks-series-usestate-12ne"
                />
            </div>

            <div className="projects-wrapper">
                <DisplayBlog
                    title="React Hooks Series: useEffect"
                    src={UseEffect}
                    placeholder={UseEffectTiny}
                    alt="Black background with the word useEffect written in bold orange"
                    description="Part two in my React Hooks Series takes a look at the useEffect hook and how I implememnt in a small timer app I created in Codesandbox."
                    url="https://dev.to/jamesncox/react-hook-series-useeffect-in2"
                />
            </div>
        </>
    )
}