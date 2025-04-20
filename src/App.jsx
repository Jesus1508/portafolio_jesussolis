import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <Resume />
      <Contact />
    </>
  );
}

export default App;
