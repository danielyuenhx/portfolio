import React from 'react'
import github from '../images/github.png'

function Projects() {
    return (
        <div className='h-screen flex-col justify-center items-center text-center font-mono'>
            <h1 className='font-bold text-6xl pb-20'>Projects</h1>
            <div className='flex justify-around'>
                <div className='w-5/12'>
                    <img src={github}></img>
                </div>
                <div className='w-5/12'>
                    Pong Game
                </div>
            </div>
        </div>
    )
}

export default Projects
