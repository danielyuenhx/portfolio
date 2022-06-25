import React, {useState} from 'react'
import SmoothCollapse from 'react-smooth-collapse'

function About() {
    const [expanded, setExpanded] = useState();

    return (
        <div className='h-screen w-screen flex justify-center items-center font-mono text-left'>
            <div className='flex w-9/12 items-center justify-around'>
                {/* <div className='w-5/12'>
                    <h1 className='text-5xl font-title py-6 tracking-tight align-top'>Skills</h1>
                    Programming Languages
                    Experienced with multiple programming languages such as:
                    Python, Java, JavaScript, C, SQL, MATLAB

                    Web Development
                    Familiar with designing and developing web applications using:
                    HTML/CSS, PHP, Bootstrap, Three.js, React, Python Flask, Socket.io

                    Data Manipulation and Visualisation
                    SQL/MySQL, Tableau
                </div> */}
                <div className='w-5/12'>
                    <h1 className='text-5xl font-title py-6 tracking-tight align-top'>About me</h1>
                    I'm a Final Year Software Engineering undergraduate at Monash University Malaysia who is enjoying all things related to programming. I mainly love working on web development because there is where creativity can shine ✨ You can check out some of my skills by hovering over the icons beside! 
                </div>
            </div>
        </div>
    )
}

export default About
