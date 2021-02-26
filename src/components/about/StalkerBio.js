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
            <p className="text">So. You want to know EVERYTHING there is to know?</p>
            <p className="text">Well, I enjoy long walks on the beach 🌊....</p>
            <p className="text">Wait wait wait! This isn't THAT kind of bio. (Even though I actually do enjoy long walks on the beach.)</p>
            <p className="text">In all seriousness-ish:</p>
            <p className="text">I am married to my incredible wife, Emily, who is a total badass. We've been together 12 years and married 10 year this July! We have a beautiful daughter, Ellie, who just turned 8, and is the reason I do anything.</p>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={Family}
                    placeholder={FamilyTiny}
                    alt="From left to right: my Rottweiler, Dempsey, my daughter Ellie, my wife, Emily, and myself, James."
                />
            </div>
            <p className="image-text">Not pictured is our other pupper, Cocoa. I don't know what she was doing when I snapped this photo.</p>

            <p className="text">Hobbies:</p>
            <ul>
                <li className="text">Music 🎹 is a big part of my life. I play guitar, drums, piano, sing a little and I listen to music pretty much all day. Except for when I'm coding, strangely not then.</li>
            </ul>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={RockStar}
                    placeholder={RockStarTiny}
                    alt="From left to right: my Rottweiler, Dempsey, my daughter Ellie, my wife, Emily, and myself, James."
                />
            </div>  
            <p className="image-text">Proof that I used to rock HARD, and rock the white jeans even HARDER</p>
                
            <ul>
                <li className="text">Soccer ⚽ is very important to me. My favorite team is Fulham, from London, England, and we ... well ... we do our best! I've been playing soccer since I was 19, and I've gotten pretty good. I think 37-year-old me would give 19-year-old me a run for his money!</li>
            </ul>

            <div className="image-wrapper">
                <ImageLoad
                    className="image"
                    src={FulhamDempsey}
                    placeholder={FulhamDempseyTiny}
                    alt="Dempsey, Konchesky and Etuhu celebrating Dempsey's wonder goal the night they beat Juventus 4-1 at home to advance to the semi-finals"
                />
            </div>
            <p className="image-text">Any true Fulham fan will immediately know what night this was and remember THAT goal. (YES! Eagle-eyed readers will spot that IS Fulham legend Clint Dempsey, and the inspiration behind our puppy's name.)</p>

            <ul>
                <li className="text">Fitness 🏋️ is another big part of my life. I run a lot, mainly to stay in shape for soccer. But lately I've started lifting weights more. My wife and recently built a home gym, and we use it almost daily. Having a kid makes you realize your own mortality, and this is my way of delaying the inevitable 😂.</li>
            </ul>

            <p className="text" style={{marginTop: "2rem"}}>Twitter Top 5 (Myspace style):</p>
            <ul>
                <li className="top-five-text"><a className="link-text" href="https://twitter.com/TheJackForge" rel="noopener noreferrer" target="_blank">@TheJackForge</a> - Freelance maestro. Funnier guy. Best known for drinking White Claws.</li>
                <li className="top-five-text"><a className="link-text" href="https://twitter.com/shookcodes" rel="noopener noreferrer" target="_blank">@shookcodes</a> - Coding wizard. Always willing to help. Knows her stuff.</li>
                <li className="top-five-text"><a className="link-text" href="https://twitter.com/CJDesiderio" rel="noopener noreferrer" target="_blank">@CJDesiderio</a> - Fellow Austonian. Blue hair. Killer coder.</li>
                <li className="top-five-text"><a className="link-text" href="https://twitter.com/sarah_bean" rel="noopener noreferrer" target="_blank">@sarah_bean</a> - Fullstack developer. Super down to Earth. Makes incredible cocktails.</li>
                <li className="top-five-text"><a className="link-text" href="https://twitter.com/julio_codes" rel="noopener noreferrer" target="_blank">@julio_codes</a> - Talented front-end developer. Hard-working and incredibly nice.</li>
            </ul>

            <p className="text" style={{marginTop: "2rem"}}>Now please enjoy one of my favorite music videos, "Tongues" by Joywave.</p>
            <div className="video-wrapper">
                <iframe className="video" title="JoyWave Tongues" src="https://www.youtube.com/embed/AqmwKi6KOSw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <p className="text" style={{marginTop: "2rem"}}>If Joywave, or awesome music videos isn't your thing, check out the incredible engineering involved in this marble music machine.</p>
            <div className="video-wrapper">
                <iframe className="video" title="Wintergartan Marble Machine" src="https://www.youtube.com/embed/IvUU8joBb1Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
 )
}