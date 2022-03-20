import React from 'react'
import { SkillsAnimation } from './Components'

function Skills() {
    return (
        <div className='select-none w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-9/12 mb-8'>
                <div className='text-left overflow-hidden whitespace-nowrap w-24 text-2xl'>
                    <div className='font-title marquee1'>Skills •&nbsp;</div>
                    <div className='font-title marquee2'>Skills •&nbsp;</div>
                </div>
            </div>
            <div className='w-10/12 h-4/6 flex justify-around font-title'>
                <div className='w-3/12 rounded-lg flex flex-col items-center p-10 bg-white'>
                    <div className='text-center font-bold text-xl'>Programming Languages</div>
                    <div><SkillsAnimation /></div>
                    <div>Experienced with multiple programming languages such as:</div>
                    <div>Python, Java, JavaScript, C, SQL, MATLAB</div>
                </div>
                <div className='w-3/12 rounded-lg flex flex-col items-center p-10 bg-white'>
                    <div className='text-center font-bold text-xl'>Web Development</div>
                    <div><SkillsAnimation /></div>
                    <div>HTML/CSS, PHP, Bootstrap, Three.js, React, Python Flask, Socket.io</div>
                </div>
                <div className='w-3/12 rounded-lg flex flex-col items-center p-10 bg-white'>
                    <div className='text-center font-bold text-xl'>Data Manipulation and Visualisation</div>
                    <div><SkillsAnimation /></div>
                    <div>SQL/MySQL, Tableau</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
