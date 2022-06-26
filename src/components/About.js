import React, {useState} from 'react'
import { motion } from "framer-motion"
import SkillsIcon from './SkillsIcon';
import { Programming, WebDev, Data } from './icons/Icons'

function About() {
    const [expanded, setExpanded] = useState();

    return (
        <div className='h-screen w-screen flex-col justify-between'>
            <div className='w-1/2 p-12 font-mono'>
                <h1 className='text-5xl font-title pb-6 tracking-tight align-top font-semibold'>About me</h1>
                I'm a Final Year Software Engineering undergraduate at Monash University Malaysia who is enjoying all things related to programming. I mainly love working on web development because there is where creativity can shine ✨ You can check out some of my skills by hovering over the cards below! 
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
            <div className='flex w-9/12 h-3/6 justify-around align-middle'>
                <div className='w-3/12 bg-white border-2 drop-shadow-md hover:drop-shadow-2xl h-4/6 hover:h-full hover:p-0 rounded-2xl flex-col justify-center p-4 transition-all ease-in-out duration-500 overflow-hidden'>
                    <div className='flex justify-center p-8'>
                        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className='text-center font-bold text-xl uppercase font-logo mb-16 h-8'><p>Programming</p><p>Languages</p></div>
                    <div className='text-center font-bold px-8'>Experienced with multiple programming languages such as:</div>
                    <div className='text-center px-8'>Python, Java, JavaScript, C, SQL</div>
                </div>
                <div className='w-3/12 bg-white border-2 drop-shadow-md hover:drop-shadow-2xl h-4/6 hover:h-full hover:p-0 rounded-2xl flex-col justify-center p-4 transition-all ease-in-out duration-500 overflow-hidden'>
                    <div className='flex justify-center p-8'>
                        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className='text-center font-bold text-xl uppercase font-logo mb-16 h-8'><p>Web</p><p>Development</p></div>
                    <div className='text-center font-bold px-8'>Skilled in web development using tools such as:</div>
                    <div className='text-center px-8'>HTML/CSS, React, PHP, Bootstrap, Python Flask</div>
                </div>
                <div className='w-3/12 bg-white border-2 drop-shadow-md hover:drop-shadow-2xl h-4/6 hover:h-full hover:p-0 rounded-2xl flex-col justify-center p-4 transition-all ease-in-out duration-500 overflow-hidden'>
                    <div className='flex justify-center p-8'>
                        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className='text-center font-bold text-xl uppercase font-logo mb-16 h-8'><p>Data Manipulation</p><p>and Visualisation</p></div>
                    <div className='text-center font-bold px-8'>Familiar with handling data using:</div>
                    <div className='text-center px-8'>SQL/MySQL, Tableau, Apache Spark, R</div>
                </div>
            </div>
        </div>
    )
}

export default About
