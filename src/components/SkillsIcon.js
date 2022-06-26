import React from 'react'
import { motion } from "framer-motion"

function SkillsIcon({ icon, skill }) {
    return (
        <motion.div className='w-16 h-16 rounded-full border-2 bg-gray-200 flex justify-center items-center shadow-lg'
            whileHover={{ 
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                 }}
            transition={{ type: 'spring', stiffness: 350, originX: 0 }}
        >
            { icon }
        </motion.div>
    )
}

export default SkillsIcon
