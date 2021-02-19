import React from 'react'
import ImageLoad from '../../hooks/ImageLoad'
import Dempsey from '../../assets/images/Dempsey.jpg'
import DempseyTiny from '../../assets/images/Dempsey-tiny.jpg'

export default function MediumBio() {

    return (
        <>
            <p className="text">I am a 37-year-old career changer. I have been coding for 3 years now, and I want to build things that help people while paying the bills!</p>
            <p className="text">Fun fact: I have a new puppy. 🐶 His name is Dempsey, and he's the goodest boy.</p>
           <div className="image-wrapper">
               <img src={Dempsey} alt="My puppy Dempsey, an 8-month-old Rottweiler mix" className="image" />
                {/* <ImageLoad
                    src={Dempsey}
                    placeholder={DempseyTiny}
                    alt="My puppy Dempsey, an 8-month-old Rottweiler mix"
                    className="image"
                /> */}
            </div>
        </>
 )
}