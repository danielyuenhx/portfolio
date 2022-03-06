import React, {useState, useRef, useEffect} from 'react'

function Intro() {

    const [className1, setClassName1] = useState('');
    const [className2, setClassName2] = useState('');
    const [intro, setIntro] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => {
                setClassName1(' active');
            }, 400)
            setTimeout(() => {
                setClassName2(' active');
            }, 800)

            setTimeout(() => {
                setTimeout(() => {
                    setClassName1(' fade');
                }, 0)
                setTimeout(() => {
                    setClassName2(' fade');
                }, 50)
            }, 2000)

            setTimeout(() => {
                setIntro(' h-[0px]');
            }, 2300)

        }, 0);
    }, []);

    return (
        <div className={'flex select-none justify-center items-center text-center left-0 top-0 w-screen h-screen bg-zinc-900' + intro} style={{transition: '1s'}}>
            <div className='flex intro-logo absolute text-white'>
                <span className={'logo font-semibold text-2xl tracking-widest relative inline-block bottom-[-20px] opacity-0' + className1}>Daniel&nbsp;</span>
                <span className={'logo font-semibold text-2xl tracking-widest relative inline-block bottom-[-20px] opacity-0' + className2}>Yuen</span> 
            </div>    
        </div>
    )
}

export default Intro
