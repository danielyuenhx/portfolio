import React from 'react'
import "./style.css"
import Typical from 'react-typical'

function About() {
    React.useEffect(() => {
        document.querySelector('#home').classList.add('fade-in-about');
    }, []);

    return (
        <div id="home" className="h-screen md:w-1/2 flex flex-col justify-center items-left font-mono">
            <div className='ml-[5%] md:ml-[10%] lg:ml-[35%] z-10'>
                <h1 className='text-2xl font-mono'>Hello! I'm</h1>
                <h1 className='font-bold text-7xl pb-3 font-title'>Daniel Yuen</h1>
                {/* <p className='font-mono inline-block'>I'm a {' '}
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Software Engineer', 1000,
                            'Web developer', 1000,
                        ]}
                        wrapper="span"
                    />
                </p> */}
                <Typical className='font-mono' loop={Infinity} steps={['Software Engineer / Web Developer', 1000, '', 1]} />
                {/* <p className='font-mono'>Based in Malaysia</p> */}
            </div>
        </div>
    )
}

export default About
