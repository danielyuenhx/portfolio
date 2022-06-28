import React from 'react'

function SkillsCard({ icon, title, text1, text2 }) {
    return (
        <div className='relative border-2 w-5 h-[90%] overflow-hidden m-2.5 min-w-[50px] rounded-[30px] hover:rounded-[10px] hover:min-w-[200px] transition-all ease duration-500 skills-card'>
            <div className='relative h-full'>
                <div className='absolute top-2 w-[36px] text-center ml-[5px] transition-all ease duration-500 icon-div'>
                    { icon }
                </div>
                <div className='absolute bottom-6 w-[36px] text-center ml-[5px] rotate-[-90deg] tracking-wider whitespace-nowrap transition-all ease duration-500 skills-title'>{ title }</div>
                <div className='ml-[3rem] absolute top-6 opacity-0 transition-all ease duration-500 skills-text min-w-[125px] max-w-[100px] tracking-wider'>
                    <p>
                        { text1 }
                    </p> 
                    <p className='font-semibold'>
                        { text2 }
                    </p>
                </div>
                {/* <div className='ml-[3rem] absolute top-40 opacity-0 transition-all ease duration-500 skills-text min-w-[150px]'>{ text2 }</div> */}
            </div>
        </div>
    )
}
// 

export default SkillsCard
