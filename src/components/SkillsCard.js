import React from 'react'

function SkillsCard({ icon, title }) {
    return (
        <div className='relative border-2 w-5 h-full overflow-hidden m-3.5 min-w-[50px] rounded-[30px] hover:rounded-[10px] hover:min-w-[200px] transition-all ease duration-500'>
            <div className='absolute top-2 w-[36px] text-center ml-[5px]'>
                { icon }
            </div>
            <h1 className='rotate-[-90deg]'>{ title }</h1>
        </div>
    )
}
// 

export default SkillsCard
