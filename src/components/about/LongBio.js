import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import Maze from '../../assets/images/maze.gif'
import MazeTiny from '../../assets/images/maze-tiny.jpg'
import Sleeves from '../../assets/images/sleeves.gif'
import SleevesTiny from '../../assets/images/sleeves-tiny.jpg'
import Dancing from '../../assets/images/dancing.gif'
import DancingTiny from '../../assets/images/dancing-tiny.jpg'

export default function LongBio() {

    return (
        <>
            <p className="text">My journey to becoming a software developer has been long and winding.</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="gif"
                    style={{justifySelf: "start"}}
                    src={Maze}
                    placeholder={MazeTiny}
                    alt="Gif of balls navigating a maze"
                />
            </div>
            <p className="text">I am transitioning from a restaurant background. From putting out literal fires 🔥 to squashing bugs 🐛, I am used to rolling up my sleeves, and doing the dirty work.</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="gif"
                    src={Sleeves}
                    placeholder={SleevesTiny}
                    alt="Gif of a man rolling up his sleeves and then rubbing his hands together."
                />
            </div>
            <p className="text">But I digress.</p>
            <p className="text">I learned to code because I want to satisfy my creative urges, provide for my family, and when the time is right, build a log home in the mountains and work from our wooded retreat.</p>
            <div className="image-wrapper">
                <ImageLoad
                    className="gif"
                    src={Dancing}
                    placeholder={DancingTiny}
                    alt="Gif of a man on the same hills from The Sound of Music dancing in a similar fashion as Julie Andrews"
                />
            </div>
        </>
 )
}