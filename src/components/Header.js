import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import "./style.css"

function Header({ toggle }) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setIsHidden(false);
      }, 3100)
    }, 0);
  }, []);
  
  return (
    <nav className={"z-50 select-none flex justify-between items-center fixed w-full h-16 md:h-20 top-0 left-0 text-lg font-header text-black bg-gray-100 bg-opacity-75 md:bg-opacity-0 transition " + (isHidden ? "header-fade-out": "header-fade-in")} style={{transition: '1s'}}>
      <Link 
        activeClass="active"
        smooth={true}
        offset={0}
        duration={1000} 
        to="home" className='logo ml-2 py-2 px-2 hover:animate-logo-shake md:ml-20 tracking-wide font-bold flex items-center hover:cursor-pointer'>
        {/* <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> */}
        <p className="text-xl uppercase font-bold font-mono tracking-wider">Daniel Yuen</p>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="mr-12 md:block hidden">
        <ul className="flex text-base pr-8">
          {[
            ['Home', 'home'],
            ['About', 'about'],
            ['Skills', 'skills'],
            ['Projects', 'projects'],
          ].map(([title, url]) => (
            <li><Link
              activeClass="active"
              smooth={true}
              offset={0}
              duration={1000} 
              to={url}>
                <p 
              className='link px-4 py-3 inline-block relative uppercase tracking-widest ml-5 hover:cursor-pointer'>{title}</p>
                </Link></li>
                // link px-4 py-2 uppercase tracking-widest rounded-full ml-4 transition ease duration-300 active hover:cursor-pointer
              // hover:bg-black hover:text-white
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header