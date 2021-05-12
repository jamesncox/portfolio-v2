import DisplayProject from "../../hooks/DisplayProject";
import TheBoredinator from "../../assets/images/the-boredinator.jpg";
import TheBoredinatorTiny from "../../assets/images/the-boredinator-tiny.jpg";
import GifFit from "../../assets/images/GIF-FIT.jpg";
import GifFitTiny from "../../assets/images/GIF-FIT-tiny.jpg";
import DoDidDone from "../../assets/images/do-did-done.jpg";
import DoDidDoneTiny from "../../assets/images/do-did-done-tiny.jpg";
import BoredinatorFeatures from "../../data/boredinatorFeatures.json";
import GifFitFeatures from "../../data/gifFitFeatures.json";
import DoDidDoneFeatures from "../../data/doDidDoneFeatures.json";
import LegoLand from "../../assets/images/lego-land.jpg";
import LegoLandTiny from "../../assets/images/lego-land-tiny.jpg";
import LegoLandFeatures from "../../data/legoLandFeatures.json";
import MatrixTodo from "../../assets/images/matrix-todo.jpg";
import MatrixTodoTiny from "../../assets/images/matrix-todo-tiny.jpg";

export default function FeaturedProjects() {
  return (
    <>
      <div className="projects-wrapper">
        <DisplayProject
          title="The Matrix Todo"
          subtitle="Todo app for fans of The Matrix"
          src={MatrixTodo}
          placeholder={MatrixTodoTiny}
          id="collapsible-matrix-todo"
          alt="Screenshot of The Todo Matrix with green Matrix code"
          features={LegoLandFeatures}
          github="https://github.com/jamesncox/tonic-todo-react"
          url="https://the-matrix-todo.netlify.app/"
          gitHubAriaTitle="MatrixTodoGithub"
          githubAriaDesc="MatrixTodoGithubDesc"
          desktopAriaTitle="MatrixTodoDesktop"
          desktopAriaDesc="MatrixTodoDesktopDesc"
        />

        <DisplayProject
          title="Ellie's Lego Land"
          subtitle="Blog for my daughter to showcase her favorite Lego builds"
          src={LegoLand}
          placeholder={LegoLandTiny}
          id="collapsible-lego-land"
          alt="Screenshot of Ellie's Lego Land homepage"
          features={LegoLandFeatures}
          github="https://github.com/jamesncox/ellies-lego-land"
          url="https://ellies-lego-land.vercel.app/"
          gitHubAriaTitle="LegoLandGithub"
          githubAriaDesc="LegoLandGithubDesc"
          desktopAriaTitle="LegoLandDesktop"
          desktopAriaDesc="LegoLandDesktopDesc"
        />

        <DisplayProject
          title="The Boredinator"
          subtitle="Activities and inspiration to stave off boredom"
          src={TheBoredinator}
          placeholder={TheBoredinatorTiny}
          id="collapsible-boredinator"
          alt="Screenshot of The Boredinator home page"
          features={BoredinatorFeatures}
          github="https://github.com/jamesncox/the-boredinator/"
          url="https://boredinator.netlify.app/"
          gitHubAriaTitle="BoredinatorGithub"
          githubAriaDesc="BoredinatorGithubDesc"
          desktopAriaTitle="BoredinatorDesktop"
          desktopAriaDesc="BoredinatorDesktopDesc"
        />

        <DisplayProject
          title="GIF FIT"
          subtitle="Home workouts made easy!"
          src={GifFit}
          placeholder={GifFitTiny}
          id="collapsible-gif-fit"
          alt="Screenshot of GIF FIT app"
          features={GifFitFeatures}
          github="https://github.com/jamesncox/gif-fit/"
          url="https://gif-fit.netlify.app/"
          gitHubAriaTitle="GifFitGithub"
          githubAriaDesc="GifFitGithubDesc"
          desktopAriaTitle="GifFitDesktop"
          desktopAriaDesc="GifFitDesktopDesc"
        />

        <DisplayProject
          title="Do Did Done"
          subtitle="Keep track of your todos by category"
          src={DoDidDone}
          placeholder={DoDidDoneTiny}
          id="collapsible-do-did-done"
          alt="Screenshot of Do Did Done app"
          features={DoDidDoneFeatures}
          github="https://github.com/jamesncox/do-did-done-react/"
          url="https://do-did-done.netlify.app/"
          gitHubAriaTitle="DoDidDoneGithub"
          githubAriaDesc="DoDidDoneGithubDesc"
          desktopAriaTitle="DoDidDoneDesktop"
          desktopAriaDesc="DoDidDoneDesktopDesc"
        />
      </div>
    </>
  );
}
