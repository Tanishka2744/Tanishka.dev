import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 3000);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Navbar dark={dark} setDark={setDark} />
          <Hero dark={dark} />
          <About dark={dark} />
          <Education dark={dark} />
          <Skills dark={dark} />
          <Services dark={dark} />
          <Projects dark={dark} />
          <Contact dark={dark} />
        </>
      )}
    </div>
  );
}

export default App;





