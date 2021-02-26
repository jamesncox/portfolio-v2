import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import FulhamDempsey from '../../assets/images/Fulham Dempsey.jpg'
import FulhamDempseyTiny from '../../assets/images/Fulham Dempsey Tiny.jpg'
import Family from '../../assets/images/Family.jpg'
import FamilyTiny from '../../assets/images/Family Tiny.jpg'
import RockStar from '../../assets/images/Rock Star.jpg'
import RockStarTiny from '../../assets/images/Rock Star Tiny.jpg'

export default function StalkerBio() {

    return (
        <>
            <p className="text">So you want to know EVERYTHING there is to know?</p>
            <p className="text">I enjoy long walks on the beach.....</p>
            <p className="text">Wait wait wait! This isn't THAT kind of bio. (Even though I actually do enjoy long walks on the beach.)</p>
            <p className="text">Alright, let's get to it.</p>
            <p className="text">Family stuff:</p>
            <p className="text">I have a beautiful daughter, Ellie, who just turned 8. My wife is a total badass, and we've been together 12 years and married 10 year this July!</p>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={Family}
                    placeholder={FamilyTiny}
                    alt="From left to right: my Rottweiler, Dempsey, my daughter Ellie, my wife, Emily, and myself, James."
                />
            </div>
            <p className="image-text">(Not pictured is our other pupper, Cocoa. I don't know what she was doing when I snapped this photo.)</p>

            <p className="text">Hobbies:</p>
            <ul>
                <li className="text">Music is a big part of my life. I play guitar, drums, piano, sing a little and I listen to music pretty much all day. Except for when I'm coding, strangely not then.</li>
            </ul>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={RockStar}
                    placeholder={RockStarTiny}
                    alt="From left to right: my Rottweiler, Dempsey, my daughter Ellie, my wife, Emily, and myself, James."
                />
            </div>  
            <p className="image-text">Proof that I used to rock HARD</p>
                
            <ul>
                <li className="text">Soccer is very important to me. My favorite team is Fulham, from London, England, and we ... well ... we do our best! I've been playing soccer since I was 19, and I've gotten pretty good. I think 37-year-old me would give 19-year-old me a run for his money!</li>
            </ul>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={FulhamDempsey}
                    placeholder={FulhamDempseyTiny}
                    alt="Dempsey, Konchesky and Etuhu celebrating Dempsey's wonder goal the night they beat Juventus 4-1 at home to advance to the semi-finals"
                />
            </div>
            <p className="image-text">Any true Fulham fan will immediately know what night this was and remember THAT goal.</p>

            <p className="text">Now please one of my favorite music vidoes, "Tongues" by Joywave.</p>
            <div className="video-wrapper">
                <iframe className="video" title="JoyWave Tongues" src="https://www.youtube.com/embed/AqmwKi6KOSw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
 )
}