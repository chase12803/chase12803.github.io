import Home from "../pages/home";
import Resume from "../pages/resume";
import Socials from "../pages/socials";
import Projects from "../pages/projects";
import Error from "../pages/nopage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Creating a route for each page 
              When linking to {path} it will display the given page*/}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
          {/* Catch all 404 error page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
