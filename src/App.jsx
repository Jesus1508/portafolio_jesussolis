import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import ChatWidget from "./components/ChatWidget";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
  return (
    <div className="dark:bg-slate-900 transition-colors">
      <ScrollProgressBar />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates/>
      <Resume />
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App;
