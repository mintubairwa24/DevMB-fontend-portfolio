import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import Exprience from "./pages/Exprience";
import Skills from "./pages/SkillsDetails";
import ProjectsDetails from "./pages/ProjectsDetails";
import SkillsDetails from "./pages/SkillsDetails";
import AboutDetails from "./pages/AboutDetails";
import ContactDetails from "./pages/ContactDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exprience" element={<Exprience />} />
        <Route path="/projects" element={<ProjectsDetails />} />
        <Route path="/projectsdetails" element={<ProjectsDetails />} />
        <Route path="/skills" element={<SkillsDetails />} />
        <Route path="/about" element={<AboutDetails />} />
        <Route path='/contact' element={<ContactDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
