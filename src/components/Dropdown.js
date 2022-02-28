import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({isOpen, toggle}) {
    return (
        <div className={"fixed grid grid-rows-4 items-center text-center bg-gray-100 bg-opacity-60 w-full top-16 font-mono transition-all ease-in-out duration-300 " + (isOpen ? "opacity-100" : "opacity-0")} onClick={toggle}>
                {[
                    ['Home', '/#'],
                    ['About', '/#'],
                    ['Skills', '/#'],
                    ['Projects', '/#'],
                ].map(([title, url]) => (
                    <Link to={url} className="py-1 text-black text-base transition ease duration-300 hover:bg-black hover:text-white">{title}</Link>
                ))}
        </div>
        // <div className={isOpen ? "fixed flex flex-col bg-gray-100 bg-opacity-60 w-full top-12 font-mono" : "hidden"} onClick={toggle}>
        //     <ul className="flex flex-col text-xs text-center w-full">
        //         {[
        //             ['Home', '/#'],
        //             ['About', '/#'],
        //             ['Skills', '/#'],
        //             ['Projects', '/#'],
        //         ].map(([title, url]) => (
        //             <li className="w-full"><Link to={url} className="w-full text-black transition ease duration-300 hover:bg-black hover:text-white">{title}</Link></li>
        //         ))}
        //     </ul>
        // </div>
    )
}

export default Dropdown
