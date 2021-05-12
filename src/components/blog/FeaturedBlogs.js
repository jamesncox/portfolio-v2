import DisplayBlog from "../../hooks/DisplayBlog";
import UseState from "../../assets/images/useState.jpg";
import UseStateTiny from "../../assets/images/useStateTiny.jpg";
import BuildingBlocks from "../../assets/images/building-blocks.jpg";
import BuildingBlocksTiny from "../../assets/images/building-blocks-tiny.jpg";
import DarthMosaic from "../../assets/images/darth-mosaic.jpg";
import DarthMosaicTiny from "../../assets/images/darth-mosaic-tiny.jpg";

export default function FeaturedBlogs() {
  return (
    <>
      <div>
        <DisplayBlog
          title="TIL - HTML's Color Picker"
          src={DarthMosaic}
          placeholder={DarthMosaicTiny}
          alt="Black background with the word DarthMosaic written in bold blue"
          description="Part one in my #TIL series, in which I briefly discuss a different coding topic each day."
          url="https://dev.to/jamesncox/html-s-color-picker-4ej3"
          ariaTitle="DarthMosaicArrow"
          ariaDesc="DarthMosaicDesc"
        />
      </div>

      <div>
        <DisplayBlog
          title="Essential JavaScript Building Blocks for React"
          src={BuildingBlocks}
          placeholder={BuildingBlocksTiny}
          alt="Array methods with buttons for .map, .filter, .find, and .reduce"
          description="Part one in my essential JavaScript building blocks for React series. I explore several JavaScript concepts that are common in React, and showcase examples for each one."
          url="https://dev.to/jamesncox/essential-javascript-building-blocks-for-react-9m9"
          ariaTitle="BuildingBlocksArrow"
          ariaDesc="BuildingBlocksDesc"
        />
      </div>

      <div>
        <DisplayBlog
          title="React Hooks Series: useState"
          src={UseState}
          placeholder={UseStateTiny}
          alt="Black background with the word useState written in bold and white"
          description="Part one in my React Hooks Series. I examine the useState hook in a basic timer app with examples from Codesandbox. Also in this series: useEffect and useRef."
          url="https://dev.to/jamesncox/react-hooks-series-usestate-12ne"
          ariaTitle="useStateArrow"
          ariaDesc="useStateDesc"
        />
      </div>
      {/* 
      <div>
        <DisplayBlog
          title="React Hooks Series: useRef"
          src={UseRef}
          placeholder={UseRefTiny}
          alt="Black background with the word useRef written in bold orange"
          description="Part three in the React Hooks Series talks about my personal favorite hook: useRef. We look at how useRef solves a problem with pausing and starting the timer in my Codesandbox example."
          url="https://dev.to/jamesncox/react-hooks-series-useref-27mk"
          ariaTitle="useRefArrow"
          ariaDesc="useRefDesc"
        />
      </div> */}
    </>
  );
}
