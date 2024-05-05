// Custom components
import Name from "../src/components/Name";
import NavBar from "../src/components/NavBar";
import Picture from "../src/components/Picture";

// Default home page
const Home = () => (
  <div>
    <div className="flex align-top justify-center bg-yellow-300">
        <Name/>
        <Picture />
    </div>
    <NavBar />
  </div>
);

export default Home;
