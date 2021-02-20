import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import Dancing from '../../assets/images/dancing.gif'
import DancingTiny from '../../assets/images/dancing-tiny.jpg'

export default function LongBio() {

    return (
        <>
            <p className="text">My journey to becoming a software developer has been long and winding.</p>
            <p className="text">Having transitioned from the restaurant industry to software development, I went from putting out literal fires 🔥 to squashing bugs 🐛.</p>
            <p className="text">I learned to code because I want to satisfy my creative urges, provide for my family, and when the time is right, build a log home in the mountains and work remotely from our wooded retreat.</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="gif"
                    src={Dancing}
                    placeholder={DancingTiny}
                    alt="Gif of a man on the same hills from The Sound of Music dancing in a similar fashion as Julie Andrews"
                />
            </div>
            <p className="text">My favorite language is Ruby. My favorite library is React. JavaScript and I have a tumultuous past, but we've come to a mutual understanding.</p>
            <p className="text">Next, I plan on learning PHP, at least the core concepts by the end of this year.</p>
        </>
 )
}