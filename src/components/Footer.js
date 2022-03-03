import React from 'react'
import github from '../images/github-white.png'
import linkedin from '../images/linkedin-white.png'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center h-56 font-bold bg-neutral-900 text-white font-logo tracking-widest text-xs">
            <p className='block'>Page built by DANIEL YUEN</p>
            <div>
                <div className='inline-block'>
                    <a href="https://github.com/danielyuenhx" target="_blank">
                        <img className='w-14 h-14 my-4 mr-2' src={github} />
                    </a>
                </div>
                <div className='inline-block'>
                    <a href="https://www.linkedin.com/in/danielyuenhx" target="_blank">
                        <img className='w-14 h-14 my-4' src={linkedin} />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
