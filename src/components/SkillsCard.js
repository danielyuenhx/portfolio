import React from 'react'

function SkillsCard({ icon, title, text1, text2 }) {
    return (
        <div className='relative border-2 w-2/12 h-full overflow-hidden m-3.5 min-w-[16.66%] rounded-[30px] hover:rounded-[10px] hover:min-w-[55%] transition-all ease duration-500'>
            { icon }
        </div>
    )
}
// 

export default SkillsCard
