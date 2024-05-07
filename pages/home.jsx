// Custom components
import Name from "../src/components/Name";
import NavBar from "../src/components/NavBar";
import Picture from "../src/components/Picture";

// Default home page
const Home = () => (
  // Overflow auto is needed here to prevent a gap in the gradient when adding margins to the body of the site
  <div className="h-screen overflow-auto">
    <div className="h-fit w-full flex justify-evenly items-center overflow-auto mt-9">
        <Name/>
        <Picture/>
    </div>
    <NavBar />
  </div>
);

export default Home;
