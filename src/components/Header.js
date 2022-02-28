import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header({ toggle }) {
  return (
    <nav className="z-50 flex justify-between items-center fixed w-full h-16 top-0 left-0 shadow-sm text-lg font-mono bg-gray-100 bg-opacity-75">
      <Link to="/" className='ml-4 md:ml-12 tracking-wider font-bold flex items-center'>
      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
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
            ['Home', '/#home'],
            ['About', '/#about'],
            ['Skills', '/#skills'],
            ['Projects', '/#projects'],
          ].map(([title, url]) => (
            <li><Link smooth to={url} className="px-4 py-2 rounded-full ml-4 text-black transition ease duration-300 active hover:bg-black hover:text-white">{title}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header