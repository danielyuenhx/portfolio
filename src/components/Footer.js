import React from 'react'
import github from '../images/github-white.png'
import linkedin from '../images/linkedin-white.png'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center h-60 bg-[#282828] text-white font-header tracking-widest">
            <p className='block'>© 2022 Daniel Yuen. All Rights Reserved.</p>
            <div>
                <div className='inline-block'>
                    <a href="https://github.com/danielyuenhx" target="_blank">
                        <img className='w-10 h-10 my-4 mr-4' src={github} />
                    </a>
                </div>
                <div className='inline-block'>
                    <a href="https://www.linkedin.com/in/danielyuenhx" target="_blank">
                        <img className='w-10 h-10 my-4' src={linkedin} />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
