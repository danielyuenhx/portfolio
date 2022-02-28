import React, {useState, useEffect} from "react";
import Header from "./components/Header.js"
import Dropdown from "./components/Dropdown.js"
import Animation from "./components/Animation.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"
import Footer from "./components/Footer.js"
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideDropdown =  () => {
      // medium size for tailwind
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }
    // listen for resize events
    window.addEventListener('resize', hideDropdown);

    return () => {
      window.removeEventListener('resize', hideDropdown);
    }
  });

  return (
    <>
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Animation />
      <About />
      {/* <Skills /> */}
      <Footer />
    </>
  );
}

export default App;
