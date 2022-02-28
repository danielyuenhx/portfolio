import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between items-center fixed w-full h-12 top-0 left-0 shadow-sm font-mono text-sm">
        <Link to="/" className='pl-8 tracking-wider font-bold'>Daniel's Portfolio</Link>
        <div className="pr-8 md:block hidden">
          <ul className="flex">
            <li><Link to="/" className="p-4">Home</Link></li>
            <li><Link to="/" className="p-4">About Me</Link></li>
            <li><Link to="/" className="p-4">Skills</Link></li>
            <li><Link to="/" className="p-4">Test</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header