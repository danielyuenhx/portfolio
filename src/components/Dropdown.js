import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

function Dropdown({isOpen, toggle}) {
    return (
        <div className={"fixed grid grid-rows-4 items-center text-center bg-gray-100 bg-opacity-75 w-full top-16 font-mono z-50 " + (isOpen ? "fade-in": "fade-out")} onClick={toggle}>
                {[
                    ['Home', '/#'],
                    ['About', '/#'],
                    ['Skills', '/#'],
                    ['Projects', '/#'],
                ].map(([title, url]) => (
                    <Link to={url} className="py-1 text-black text-base transition ease duration-300 hover:bg-black hover:text-white">{title}</Link>
                ))}
        </div>
        //  + (isOpen ? "opacity-100" : "opacity-0")
    )
}

export default Dropdown
