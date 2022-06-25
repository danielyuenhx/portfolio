import React from 'react'
import "./style.css"
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"

function About() {
    React.useEffect(() => {
        document.querySelector('#home').classList.add('fade-in-about');
    }, []);

    return (
        <div id="home" className="select-none h-screen md:w-1/2 flex flex-col justify-center items-left">
            <div className='mt-12 ml-[5%] md:ml-[10%] lg:ml-[30%] z-10 text-left'>
                <p className='text-4xl font-title'>Hello! I'm</p>
                <h1 className='name font-bold text-7xl pb-3 font-title transition-all ease-in-out duration-300'><div>Daniel Yuen</div></h1>
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
                <p className='font-mono text-xl'>
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
                        .typeString("Frontend UI/UX Designer")
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
                <motion.button
                    whileHover={{ scale: 1.3, }}
                    transition={{ type: 'spring', stiffness: 350, originX: 0 }}
                >
                    <div className='inline-block'>
                        <a href="https://github.com/danielyuenhx" target="_blank">
                            <img className='w-10 h-10 my-4 mr-4' src={github} />
                        </a>
                    </div>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.3, }}
                    transition={{ type: 'spring', stiffness: 350, originX: 0 }}
                >
                    <div className='inline-block'>
                        <a href="https://www.linkedin.com/in/danielyuenhx" target="_blank">
                            <img className='w-10 h-10 my-4' src={linkedin} />
                        </a>
                    </div>
                </motion.button>
            </div>
        </div>
    )
}

export default About
