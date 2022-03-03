import React from 'react'
import "./style.css"
import Typical from 'react-typical'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import Typewriter from "typewriter-effect"

function About() {
    React.useEffect(() => {
        document.querySelector('#home').classList.add('fade-in-about');
    }, []);

    return (
        <div id="home" className="h-screen md:w-1/2 flex flex-col justify-center items-left">
            <div className='mt-12 ml-[5%] md:ml-[10%] lg:ml-[30%] z-10 text-left'>
                <p className='text-2xl font-title'>Hello! I'm</p>
                <h1 className='name font-bold text-7xl pb-3 font-title transition-all ease-in-out duration-300'>Daniel Yuen</h1>
                {/* <p className='font-mono inline-block'>I'm a {' '}
                    <Typical
                        loop={Infinity}
                        steps={[
                            'Software Engineer', 1000,
                            'Web Developer', 1000,
                            'Student', 1000,
                        ]}
                        wrapper="span"
                    />
                </p> */}
                <p className='font-mono text-lg'>
                    <Typewriter
                        options={{loop:true}}
                        onInit={(typewriter)=> {
                        typewriter
                        .typeString("Software Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Student")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                        }}
                    />
                </p>
                {/* <Typical 
                    className='font-mono' 
                    loop={Infinity} 
                    steps={['Software Engineer', 2000, 'Web Developer', 2000, 'Student', 2000, '', 2000]} 
                /> */}
                {/* <p className='font-mono'>Based in Malaysia</p> */}
                <div className='inline-block'>
                    <a href="https://github.com/danielyuenhx" target="_blank">
                        <img className='w-8 h-8 my-4 mr-2 hover:animate-shake' src={github} />
                    </a>
                </div>
                <div className='inline-block'>
                    <a href="https://www.linkedin.com/in/danielyuenhx" target="_blank">
                        <img className='w-8 h-8 my-4 hover:animate-shake' src={linkedin} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
