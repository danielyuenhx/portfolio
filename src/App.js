import React, { useRef, useState, useEffect } from "react";
import {
  Header,
  Dropdown,
  Intro,
  HomeAnimation,
  Home,
  Skills,
  SkillsAnimation,
  About,
  Projects,
  Footer,
} from "./components/Components.js";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize.js";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  // DROPDOWN
  const [isOpen, setIsOpen] = useState(false);
  // dropdown onclick
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // hook that will execute functions on page load (or can specify other conditions)
  useEffect(() => {
    const hideDropdown = () => {
      // medium size for tailwind
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    // listen for resize events
    window.addEventListener("resize", hideDropdown);
    return () => {
      window.removeEventListener("resize", hideDropdown);
    };
  });

  // SPLASH SCREEN
  const [introHeight, setIntroHeight] = useState("h-screen");

  useEffect(() => {
    // disallow scroll
    document.body.classList.add("overflow-hidden");

    // squash intro screen
    setTimeout(() => {
      setIntroHeight("h-[0px]");
    }, 2300);

    // hide intro and allow scroll
    setTimeout(() => {
      setIntroHeight("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 4200);
  }, []);

  // SMOOTH SCROLLING
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // only run once component has mounted (basically onload)
  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height, introHeight]); // only re-run if size.height changes

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    // calculations from https://github.com/wrongakram/react-smooth-skew-scrolling
    skewConfig.current = window.scrollY;
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 10;

    scrollContainer.current.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`;

    /**
     * tells browser want to perform animation and request browser call as a function to
     * update before next repaint
     * when scrolling, store info but does not finalise because still scrolling
     * need loop to access scroll even when stop scrolling to continue gathering data
     * */
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div
        ref={app}
        className="fixed top-0 left-0 h-full w-full overflow-hidden"
      >
        <div ref={scrollContainer} className="scroll">
          <Intro introHeight={introHeight} />
          <HomeAnimation />
          <Home />
          {/* <SkillsAnimation /> */}
          <About />
          {/* <Skills /> */}
          {/* <Projects /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
