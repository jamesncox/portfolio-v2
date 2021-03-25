import { useState } from "react";
import LongBio from "./LongBio";
import MediumBio from "./MediumBio";
import ShortBio from "./ShortBio";
import StalkerBio from "./StalkerBio";

const lengthOptions = [
  { type: "short", Component: ShortBio },
  { type: "medium", Component: MediumBio },
  { type: "long", Component: LongBio },
  { type: "stalker", Component: StalkerBio },
];

function BioSelect() {
  const [selectedLength, setSelectedLength] = useState("short");

  const toggleLength = (e) => {
    setSelectedLength(e.target.id);
  };

  return (
    <>
      <nav className="bio-menu-wrapper">
        {lengthOptions.map(({ type }) => (
          <h2
            key={type}
            id={type}
            className={type === selectedLength ? "selected-bio" : "bio-menu"}
            onClick={toggleLength}
          >
            {type}
          </h2>
        ))}
      </nav>
      {lengthOptions.map(
        ({ type, Component }) =>
          selectedLength === type && <Component key={type} />
      )}
    </>
  );
}
export default BioSelect;
