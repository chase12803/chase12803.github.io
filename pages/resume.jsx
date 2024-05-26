import NavBar from "../src/components/NavBar";
import { TextPanel, TextPanelExpand } from "../src/components/Panel";

const Resume = () => (
  <div>
    <div className="page-title">
      <span className="p-4">Resume</span>
    </div>
    <div className="flex h-full flex-col items-center justify-between space-y-6">
      <span className="page-subtitle">Education</span>
      <TextPanelExpand
        title="Worcester Polytechnic Institute"
        intro="B.S. in Mathematical Sciences and Computer Science. Class of 2026."
        text= {["Awards: Dean's List Fall 2022, Dean's List Spring 2023, Charles O. Thompson Scholar Designation, Dean's List Fall 2023, Dean's List Spring 2024", <br />,  "Extracurricular Activities: WPI Jazz Groups, Pi Mu Epsilon National Mathematics Honorary Fraternity"]}
      />
      <TextPanelExpand
        title="Timberlane Regional High School"
        intro="Scholastic High School Diploma. Class of 2022."
        text= {["Awards: Most Excellent in Computer Technology, New Hampshire Scholar Designation", <br />,  "Extracurricular Activities: Science Honors Society, Math Honors Society Student Leader, Tri-M Music Honors Society Vice President"]}
      />
      <span className="page-subtitle">Experience</span>
      <TextPanel text="None yet" />
    </div>
    <NavBar current={2} />
  </div>
);

export default Resume;
