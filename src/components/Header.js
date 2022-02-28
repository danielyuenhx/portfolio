import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggle }) {
  return (
    <nav className="flex justify-between items-center fixed w-full h-16 top-0 left-0 shadow-sm text-lg font-mono bg-gray-100 bg-opacity-75">
      <Link to="/" className='ml-16 tracking-wider font-bold flex items-center'>
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
        <p className="uppercase">Daniel Yuen's Portfolio</p>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="mr-8 md:block hidden">
        <ul className="flex text-base pr-8">
          {[
            ['Home', '/#'],
            ['About', '/#'],
            ['Skills', '/#'],
            ['Projects', '/#'],
          ].map(([title, url]) => (
            <li><Link to={url} className="px-3 py-1 ml-4 text-black transition ease duration-300 active hover:bg-black hover:text-white">{title}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header