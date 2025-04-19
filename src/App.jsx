import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
