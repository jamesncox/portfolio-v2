import React, { useState } from "react";
import ShortBio from "./ShortBio";
import MediumBio from "./MediumBio";
import LongBio from "./LongBio";
import StalkerBio from "./StalkerBio";

const lengthOptions = ["short", "medium", "long", "stalker"];

function BioSelect() {
  const [selectedLength, setSelectedLength] = useState(lengthOptions[0]);

  const toggleLength = (e) => {
    setSelectedLength(e.target.id);
  };

  return (
    <>
      <nav className="bio-menu-wrapper">
        {lengthOptions.map((length) => (
          <h2
            key={length}
            id={length}
            className={length === selectedLength ? "selected-bio" : "bio-menu"}
            onClick={toggleLength}
          >
            {length}
          </h2>
        ))}
      </nav>
      {selectedLength === "short" && <ShortBio />}
      {selectedLength === "medium" && <MediumBio />}
      {selectedLength === "long" && <LongBio />}
      {selectedLength === "stalker" && <StalkerBio />}
    </>
  );
}
export default BioSelect;

// import React, { useState } from "react";
// import LongBio from "./LongBio";
// import MediumBio from "./MediumBio";
// import ShortBio from "./ShortBio";
// import StalkerBio from "./StalkerBio";

// const lengthOptions = [
//   { type: "short", Component: ShortBio },
//   { type: "medium", Component: MediumBio },
//   { type: "long", Component: LongBio },
//   { type: "stalker", Component: StalkerBio },
// ];

// function BioSelect() {
//   const [selectedLength, setSelectedLength] = useState("short");

//   const toggleLength = (e) => {
//     setSelectedLength(e.target.id);
//   };

//   return (
//     <>
//       {lengthOptions.map(({ type, Component }) => (
//         <>
//           <nav className="bio-menu-wrapper">
//             <h2
//               key={type}
//               id={type}
//               className={type === selectedLength ? "selected-bio" : "bio-menu"}
//               onClick={toggleLength}
//             >
//               {type}
//             </h2>
//           </nav>
//           {selectedLength === type && <Component />}
//         </>
//       ))}
//     </>
//   );
// }
// export default BioSelect;
