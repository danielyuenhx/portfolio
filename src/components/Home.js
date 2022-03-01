import React from 'react'
import "./style.css"

function About() {
    React.useEffect(() => {
        document.querySelector('#home').classList.add('fade-in-about');
    }, []);

    return (
        <div id="home" className="h-screen md:w-1/2 flex flex-col justify-center items-left font-mono">
            <div className='ml-[5%] md:ml-[10%] lg:ml-[30%] z-10'>
                <h1 className='font-black text-6xl py-3'>Daniel Yuen</h1>
                <p>Software Engineer / Web Developer</p>
                <p>Based in Malaysia.</p>
            </div>
        </div>
    )
}

export default About
