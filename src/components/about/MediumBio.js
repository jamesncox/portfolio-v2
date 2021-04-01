import ImageLoad from "../../hooks/ImageLoad";
import Dempsey from "../../assets/images/Dempsey.jpg";
import DempseyTiny from "../../assets/images/Dempsey-tiny.jpg";

export default function MediumBio() {
  return (
    <>
      <p className="text">
        I am a 37-year-old career changer. I have been coding for 3 years now,
        and I want to build tools that real people will use to help improve
        their lives.
      </p>
      <p className="text">
        You absolutely can consider me a "full stack" developer. I enjoy coding
        backends and working with databases. But my first love is the front end.
      </p>
      <p className="text">FUN FACT:</p>
      <p className="text">
        I have a new puppy. 🐶 His name is Dempsey, and he is the goodest boy.
      </p>
      <div className="image-wrapper">
        <ImageLoad
          className="image"
          src={Dempsey}
          placeholder={DempseyTiny}
          alt="My puppy Dempsey, an 8-month-old Rottweiler mix"
        />
      </div>
    </>
  );
}
