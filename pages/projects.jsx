import { NavBar, DefaultIcon } from "../src/components/NavBar";
import { TextPanel } from "../src/components/Panel";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="page-title">
        <span>Projects</span>
      </div>
      <div className="flex h-full flex-col items-center justify-between space-y-6">
        <TextPanel
          title="Current Project"
          text="Right now I'm dedicating most of my free time to developing this site. I'm building it from the ground up, by hand. The source files can be found on my GitHub. All the styling is done using Tailwind CSS and the site is built with React. I'm using Vite to build the site locally and then deploy it to GitHub where I'm hosting it using GitHub Pages. All of the animations are handled using the Framer Motion library."
        />
        <span className="page-title text-3xl">Past Projects</span>
        <TextPanel text="None yet" />
      </div>
      <NavBar current={3} />
      {/* <div>
        <Link
          className="absolute text-white"
          to="https://github.com/chase12803"
        >
          <DefaultIcon Icon={<FaGithub size="25" />} />
        </Link>
      </div> */}
    </div>
  );
};

export default Projects;
