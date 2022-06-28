import React from 'react'

function SkillsCard({ icon, title, text1, text2 }) {
    return (
        <div className='relative border-2 w-5 h-[90%] overflow-hidden m-3.5 min-w-[50px] rounded-[30px] hover:rounded-[10px] hover:min-w-[200px] transition-all ease duration-500 skills-card'>
            <div className='relative h-full'>
                <div className='absolute top-2 w-[36px] text-center ml-[5px]'>
                    { icon }
                </div>
                <div className='absolute bottom-6 w-[36px] text-center ml-[5px] rotate-[-90deg] tracking-wider whitespace-nowrap transition-all ease duration-500 skills-title'>{ title }</div>
                <div className='ml-14 absolute top-12 opacity-0 transition-all ease duration-500 skills-text min-w-[150px]'>{ text1 }</div>
                <div className='ml-14 absolute top-40 opacity-0 transition-all ease duration-500 skills-text min-w-[150px]'>{ text2 }</div>
            </div>
        </div>
    )
}
// 

export default SkillsCard
