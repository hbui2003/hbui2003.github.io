import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Project />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
