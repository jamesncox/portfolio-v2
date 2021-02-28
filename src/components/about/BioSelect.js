import React, { useState } from 'react'
import ShortBio from './ShortBio'
import MediumBio from './MediumBio'
import LongBio from './LongBio'
import StalkerBio from './StalkerBio'

function BioSelect() {

    const [short, setShort] = useState(true)
    const [medium, setMedium] = useState(false)
    const [long, setLong] = useState(false)
    const [stalker, setStalker] = useState(false)

    const handleShort = () => {
        setShort(true)
        setMedium(false)
        setLong(false)
        setStalker(false)
    }

    const handleMedium = () => {
        setShort(false)
        setMedium(true)
        setLong(false)
        setStalker(false)
    }

    const handleLong = () => {
        setShort(false)
        setMedium(false)
        setLong(true)
        setStalker(false)
    }

    const handleStalker = () => {
        setShort(false)
        setMedium(false)
        setLong(false)
        setStalker(true)
    }

    return (
        <>
            <nav className="bio-menu-wrapper">
                <h2 
                    className={short ? "selected-bio" : "bio-menu"}
                    onClick={(e) => handleShort(e)}
                >
                    short
                </h2>
                <h2 
                    className={medium ? "selected-bio" : "bio-menu"} 
                    onClick={(e) => handleMedium(e)}>
                    medium
                </h2>
                <h2 
                    className={long ? "selected-bio" : "bio-menu"} 
                    onClick={(e) => handleLong(e)}>
                    long
                </h2>
                <h2 
                    className={stalker ? "selected-bio" : "bio-menu"} 
                    onClick={(e) => handleStalker(e)}>
                    stalker
                </h2>
            </nav>
            {short ? <ShortBio /> : null}
            {medium ? <MediumBio /> : null}
            {long ? <LongBio /> : null}
            {stalker ? <StalkerBio /> : null}
        </>
    )
}

export default BioSelect;