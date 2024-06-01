// Custom components
import Name from "../src/components/Name";
import NavBar from "../src/components/NavBar";
import Picture from "../src/components/Picture";
import { TextPanel, TextPanelLink } from "../src/components/Panel";

// Default home page
const Home = () => (
  // Overflow auto is needed here to prevent a gap in the gradient when adding margins to the body of the site
  <div className="h-screen overflow-auto">
    <div className="home-section">
      <Name />
      <Picture />
    </div>
    <div className="home-section mb-20 h-min justify-center space-y-10">
      <TextPanel
        title="Welcome!"
        text={
          "Thanks for visiting my personal site. I'm currently a rising junior at Worcester Polytechnic Institute studying Math and Computer Science. In my free time I like playing video games such as Minecraft and Skyrim, playing my trumpet with the WPI Jazz Groups, and learning new things. If you need to reach me, you can email me: chase.carstensen [at] outlook [dot] com 😁"
        }
      />
      <TextPanelLink
        title="Projects"
        text={
          "I'm currently participating in the WPI Data Science REU 'Applied AI for Advanced Applications.' You can learn more on my projects page. I'm also still actively developing this site in my free time."
        }
        path="projects"
      />
    </div>
    <NavBar current={1} />
  </div>
);

export default Home;
