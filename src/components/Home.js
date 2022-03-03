import React from 'react'
import "./style.css"
import Typical from 'react-typical'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

function About() {
    React.useEffect(() => {
        document.querySelector('#home').classList.add('fade-in-about');
    }, []);

    return (
        <div id="home" className="h-screen md:w-1/2 flex flex-col justify-center items-left">
            <div className='mt-12 ml-[5%] md:ml-[10%] lg:ml-[30%] z-10 text-left'>
                <p className='text-2xl font-title'>Hello! I'm</p>
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
                <div className='inline-block'>
                    <a href="https://github.com/danielyuenhx" target="_blank">
                        <img className='w-8 h-8 my-4 mr-2' src={github} />
                    </a>
                </div>
                <div className='inline-block'>
                    <a href="https://www.linkedin.com/in/danielyuenhx" target="_blank">
                        <img className='w-8 h-8 my-4' src={linkedin} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
