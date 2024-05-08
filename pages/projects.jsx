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
          text="Ipsum ullamco tempor aute in velit ut. Minim duis dolore dolor velit elit. Duis minim est eu Lorem labore minim non adipisicing. Aliquip reprehenderit velit ex amet eiusmod. Consequat ullamco ex eiusmod proident ad incididunt laborum. Elit labore anim culpa ut. Tempor non culpa pariatur ipsum dolore culpa sint ad nisi cupidatat velit ea in."
        />
        <span className="page-title text-3xl">Past Projects</span>
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
