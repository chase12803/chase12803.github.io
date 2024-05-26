import { NavBar, DefaultIcon } from "../src/components/NavBar";
import { TextPanel, TextPanelExpand } from "../src/components/Panel";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => (
  <div>
    <div className="page-title">
      {/* bg-gradient-to-r from-red-100 to-red-200 bg-clip-text text-transparent : Text Gradient*/}
      <span className="p-4">Projects</span>
    </div>
    <div className="flex h-full flex-col items-center justify-between space-y-6">
      <TextPanelExpand
        title="Current Project"
        intro="Right now I'm dedicating most of my free time to developing this site..."
        text="I'm building it by hand with the use of a few helpful libraries and frameworks. The source files can be found on my GitHub. The site is built with React.JS and all the styling is done with Tailwind CSS. I'm using Vite to build the site locally and then deploy it to GitHub where I'm hosting it using GitHub Pages. All of the animations are handled using the Framer Motion library."
      />
      <span className="page-subtitle">Past Projects</span>
      <TextPanel text="None yet" />
    </div>
    <NavBar current={3} />
    {/* <div>
      <Link
        className="absolute"
        to="https://github.com/chase12803"
      >
        <DefaultIcon Icon={<FaGithub size="25" />} />
      </Link>
    </div> */}
  </div>
);

export default Projects;
