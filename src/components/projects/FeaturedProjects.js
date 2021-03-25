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

export default function FeaturedProjects() {
  return (
    <>
      <div className="projects-wrapper">
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
