import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import TheBoredinator from '../../assets/images/the-boredinator.jpg'
import TheBoredinatorTiny from '../../assets/images/the-boredinator-tiny.jpg'

export default function FeaturedProjects() {

    return (
        <>
            <p className="section-title">featured projects</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={TheBoredinator}
                    placeholder={TheBoredinatorTiny}
                    alt="Screenshot of The Boredinator home page"
                />
            </div>
        </>
    )
}