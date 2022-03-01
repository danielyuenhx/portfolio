import React, {useRef, useState, useEffect, createRef} from "react";
import Header from "./components/Header.js"
import Dropdown from "./components/Dropdown.js"
import Animation from "./components/Animation.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"
import Footer from "./components/Footer.js"
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // dropdown onclick
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

  const scrollArea = useRef()
  const onScroll = e => (scrollArea.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Animation />
      <Home />
      <About />
      <Skills />
      <Footer />
      <div ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: '${state.pages * 100}vh' }} />
      </div>
    </>
  );
}

export default App;
