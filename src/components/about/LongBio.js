import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import Woods from '../../assets/images/woods.gif'
import WoodsTiny from '../../assets/images/woods-tiny.jpg'

export default function LongBio() {

    return (
        <>
            <p className="text">My journey to becoming a software developer has been long and winding.</p>
            <p className="text">Having transitioned from the restaurant industry to software development, I went from putting out literal fires 🔥 to squashing bugs 🐛.</p>
            <p className="text">I learned to code because I want to satisfy my creative urges, provide for my family, and when the time is right, build a log home in the mountains and work remotely from our wooded retreat.</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="gif"
                    src={Woods}
                    placeholder={WoodsTiny}
                    alt="Gif of a man on the same hills from The Sound of Music dancing in a similar fashion as Julie Andrews"
                />
            </div>
            <p className="text">My favorite language is Ruby. My favorite library is React. JavaScript and I have a tumultuous past, but we've come to a mutual understanding, despite its idiosyncrasies.</p>
            <p className="text">Next, I plan on learning headless CMS.</p>
            <p className="text">And by the end of the year I want to dig into PHP and build at least one app with PHP.</p>
        </>
 )
}