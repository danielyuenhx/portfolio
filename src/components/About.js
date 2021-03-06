import React, {useState} from 'react'
import { motion } from "framer-motion"
import SkillsCard from './SkillsCard';
import { Programming, WebDev, Data } from './icons/Icons'

function About() {
    const [expanded, setExpanded] = useState();

    return (
        <div className='select-none w-screen h-screen flex items-center justify-center bg-slate-50'>
            <div className='w-8/12 h-2/3 p-12 flex justify-center items-center'>
                <div className='w-7/12 p-12 font-mono'>
                    <h1 className='text-5xl font-title pb-6 tracking-tight align-top font-semibold'>About me</h1>
                    I'm a Final Year Software Engineering undergraduate at Monash University Malaysia who is enjoying all things related to programming. I mainly love working on web development because there is where creativity can shine ✨ You can check out some of my skills by hovering over the cards on the right! 
                </div>
                <div className='w-5/12 h-5/6 flex justify-start items-center'>
                    <SkillsCard 
                        icon={ <Programming size={7} /> } 
                        title="Programming" 
                        text1="Experienced in multiple programming languages such as:" 
                        text2="Python, Java, JavaScript, C, MATLAB"/>
                    <SkillsCard 
                        icon={ <WebDev size={7} /> } 
                        title="Web Development"
                        text1="Skilled in web development using tools such as:"
                        text2="HTML/CSS, ReactJS, PHP, TailwindCSS, Bootstrap, Python Flask"/>
                    <SkillsCard 
                        icon={ <Data size={7} /> } 
                        title="Data Analytics"
                        text1="Familiar with handling and manipulating data as well as visualisations using:"
                        text2="SQL/MySQL, R, Tableau, Apache Spark"
                    />
                </div>
            </div>
                {/* <div className='w-5/12 flex'>
                    <div className='w-1/3 flex justify-center'>
                        <SkillsIcon icon={ <Programming size={9} /> } />
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <SkillsIcon icon={ <WebDev size={9} /> } />
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <SkillsIcon icon={ <Data size={9} /> } />
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default About
