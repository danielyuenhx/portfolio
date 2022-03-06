import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import "./style.css"

function Dropdown({isOpen, toggle}) {
    return (
        <div className={"fixed grid grid-rows-4 items-center text-center bg-gray-100 bg-opacity-75 md:bg-opacity-0 w-full top-16 font-header z-50 " + (isOpen ? "dropdown-fade-in": "dropdown-fade-out")} onClick={toggle}>
                {[
                    ['Home', 'home'],
                    ['About', 'about'],
                    ['Skills', 'skills'],
                    ['Projects', 'projects'],
                ].map(([title, url]) => (
                    <Link 
                    activeClass="active"
                    smooth={true}
                    offset={0}
                    duration={1000} 
                    to={url} 
                    className="py-1 uppercase tracking-widest transition ease duration-300 hover:bg-black hover:text-white hover:cursor-pointer">{title}</Link>
                ))}
        </div>
        //  + (isOpen ? "opacity-100" : "opacity-0")
    )
}

export default Dropdown
